import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- Imports de tes assets réels ---
// FEMMES
import F1_AS from '../../assets/Mannequin/femme(F)/F1_CPA_AS.png';
import F1_DB from '../../assets/Mannequin/femme(F)/F1_DB_PL.png';
import F1_PC from '../../assets/Mannequin/femme(F)/F1_PC.png';
import F1_AL from '../../assets/Mannequin/femme(F)/F1_AL.png';
import F2_AS from '../../assets/Mannequin/femme(F)/F2_CPA_AS.png';
import F2_DB from '../../assets/Mannequin/femme(F)/F2_DB_PL.png';
import F2_PC from '../../assets/Mannequin/femme(F)/F2_PC.png';
import F2_AL from '../../assets/Mannequin/femme(F)/F2_AL.png';
// HOMMES
import H1_AS from '../../assets/Mannequin/homme(H)/H1_CPA_AS.png';
import H1_DB from '../../assets/Mannequin/homme(H)/H1_DB_PL.png';
import H1_PC from '../../assets/Mannequin/homme(H)/H1_PC.png';
import H2_AS from '../../assets/Mannequin/homme(H)/H2_CPA_AS.png';
import H2_DB from '../../assets/Mannequin/homme(H)/H2_DB_PL.png';
import H2_PC from '../../assets/Mannequin/homme(H)/H2_PC.png';

const API_KEY = import.meta.env.VITE_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const MODELS = [
  {
    id: 'F1', label: 'Modèle F1', poses: [
      { id: 'F1_DB', src: F1_DB, name: 'Debout' },
      { id: 'F1_AS', src: F1_AS, name: 'Assise' },
      { id: 'F1_PC', src: F1_PC, name: 'Portrait' },
      { id: 'F2_AL', src: F1_AL, name: 'Allongée' }
    ]
  },
  {
    id: 'F2', label: 'Modèle F2', poses: [
      { id: 'F2_DB', src: F2_DB, name: 'Debout' },
      { id: 'F2_AS', src: F2_AS, name: 'Assise' },
      { id: 'F2_PC', src: F2_PC, name: 'Portrait' },
      { id: 'F2_AL', src: F2_AL, name: 'Allongée' }
    ]
  },
  {
    id: 'H1', label: 'Modèle H1', poses: [
      { id: 'H1_DB', src: H1_DB, name: 'Debout' },
      { id: 'H1_AS', src: H1_AS, name: 'Assis' },
      { id: 'H1_PC', src: H1_PC, name: 'Portrait' }
    ]
  },
  {
    id: 'H2', label: 'Modèle H2', poses: [
      { id: 'H2_DB', src: H2_DB, name: 'Debout' },
      { id: 'H2_AS', src: H2_AS, name: 'Assis' },
      { id: 'H2_PC', src: H2_PC, name: 'Portrait' }
    ]
  }
];

export default function APIGoogle() {
  const [garmentFile, setGarmentFile] = useState(null);
  const [garmentPreview, setGarmentPreview] = useState(null);

  const [selectedModelId, setSelectedModelId] = useState('F1');
  const [selectedPose, setSelectedPose] = useState(MODELS[0].poses[0]);

  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const fileToGenerativePart = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve({
        inlineData: { data: reader.result.split(',')[1], mimeType: file.type },
      });
      reader.readAsDataURL(file);
    });
  };

  const urlToGenerativePart = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve({
        inlineData: { data: reader.result.split(',')[1], mimeType: blob.type },
      });
      reader.readAsDataURL(blob);
    });
  };

  const handleGarmentUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGarmentFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setGarmentPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleModelChange = (model) => {
    setSelectedModelId(model.id);
    setSelectedPose(model.poses[0]);
  };

  const handleRun = async () => {
    if (!genAI) return alert("Clé API manquante ou invalide ! appeler ayoub au 0785552272 ou par teams ayoub.souri@ynov.com ");
    if (!garmentFile) return alert("Veuillez uploader un vêtement.");

    setLoading(true);
    setResultImage(null);

    try {
      setStatus("Lecture des images...");
      const garmentPart = await fileToGenerativePart(garmentFile);
      const personPart = await urlToGenerativePart(selectedPose.src);

      setStatus("Envoi à Gemini...");
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-image" });

      const prompt = `
        TASK: High-end Virtual Try-On.
        INSTRUCTIONS: 
        1. Extract the garment from Image 1.
        2. Overlay it realistically onto the person in Image 2.
        3. STRICTLY preserve the person's face, body, and original background.
        OUTPUT: Return ONLY the composited image.
      `;

      setStatus("Génération en cours (environ 10s)...");
      const result = await model.generateContent([prompt, garmentPart, personPart]);
      const response = await result.response;

      const imagePart = response.candidates[0].content.parts.find(p => p.inlineData);

      if (imagePart) {
        setResultImage(`data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`);
      } else {
        throw new Error("L'API n'a pas renvoyé d'image.");
      }
    } catch (error) {
      console.error("Erreur Gemini :", error);
      alert("Erreur lors de la génération. Vérifie tes quotas ou la console.");
    } finally {
      setStatus("");
      setLoading(false);
    }
  };

  const activeModel = MODELS.find(m => m.id === selectedModelId);

  // --- NOUVEAU STYLE : CADRE 9:16 ---
  const portraitContainerStyle = {
    aspectRatio: '9/16', // <-- LE CADRE S'ADAPTE AU FORMAT VERTICAL
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: '#f6f7f9' // Gris très léger en fond
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' // Remplit parfaitement le 9:16 sans bordures blanches
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>

      <div style={{ display: 'flex', gap: '30px', alignItems: 'stretch', flexWrap: 'wrap', marginBottom: '40px' }}>

        {/* COLONNE GAUCHE : VÊTEMENT */}
        <div style={{ ...boxStyle, flex: '1', display: 'flex', flexDirection: 'column' }}>
          <h3 style={titleStyle}>1. Votre Pièce</h3>

          <div style={{ ...uploadZoneStyle, flex: '1', minHeight: '350px' }}>
            {garmentPreview ? (
              <img src={garmentPreview} alt="Vêtement" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }} />
            ) : (
              <span style={{ color: '#aaa', fontWeight: '500', fontSize: '1.1rem' }}>+ Ajouter une photo</span>
            )}
            <input
              type="file" accept="image/*" onChange={handleGarmentUpload}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* COLONNE DROITE : MANNEQUIN + POSE */}
        <div style={{ ...boxStyle, flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>

          {/* ÉTAPE 2 : LE MANNEQUIN */}
          <div>
            <h3 style={titleStyle}>2. Le Mannequin</h3>
            {/* Grille ajustée pour des cadres verticaux */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
              {MODELS.map((model) => (
                <div
                  key={model.id}
                  onClick={() => handleModelChange(model)}
                  style={{
                    ...portraitContainerStyle,
                    border: selectedModelId === model.id ? '2px solid #4a0b19' : '1px solid transparent',
                    boxShadow: selectedModelId === model.id ? '0 4px 10px rgba(0,0,0,0.1)' : 'none',
                    opacity: selectedModelId === model.id ? 1 : 0.6,
                  }}
                >
                  <img src={model.poses[0].src} alt={model.label} style={imgStyle} />
                </div>
              ))}
            </div>
          </div>

          {/* ÉTAPE 3 : LA POSE */}
          <div>
            <h3 style={titleStyle}>3. La Pose</h3>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              {activeModel.poses.map((pose) => (
                <div
                  key={pose.id}
                  onClick={() => setSelectedPose(pose)}
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
                >
                  <div style={{
                    ...portraitContainerStyle,
                    width: '90px', // La largeur est fixée, la hauteur s'adapte auto en 9:16
                    border: selectedPose.id === pose.id ? '2px solid #4a0b19' : '1px solid #eaeaea',
                    boxShadow: selectedPose.id === pose.id ? '0 4px 10px rgba(74,11,25,0.15)' : 'none',
                  }}>
                    <img src={pose.src} alt={pose.name} style={imgStyle} />
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: selectedPose.id === pose.id ? '600' : '400', color: selectedPose.id === pose.id ? '#4a0b19' : '#666' }}>
                    {pose.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BOUTON ACTION LUXARIS */}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={handleRun}
          disabled={loading}
          style={{
            padding: '18px 56px',
            fontSize: '19px',
            fontWeight: '600',
            backgroundColor: loading ? '#ccc' : '#4a0b19',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(74, 11, 25, 0.35)'
          }}
        >
          {loading ? `⏳ ${status}` : 'Lancer l\'essayage virtuel'}
        </button>
      </div>

      {/* RÉSULTAT */}
      {resultImage && (
        <div style={{ marginTop: '50px', textAlign: 'center', padding: '30px', backgroundColor: '#fdfdfd', borderRadius: '24px', border: '1px solid #eaeaea' }}>
          <h3 style={{ marginBottom: '25px', fontWeight: '500', color: '#222' }}>Votre Création</h3>
          <img src={resultImage} alt="Résultat Try-On" style={{ maxWidth: '100%', maxHeight: '650px', borderRadius: '12px', objectFit: 'contain' }} />
        </div>
      )}
    </div>
  );
}

// Styles réutilisables pour les blocs
const boxStyle = {
  minWidth: '320px',
  backgroundColor: '#fdfdfd',
  padding: '35px',
  borderRadius: '24px',
  border: '1px solid #eaeaea',
  boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
};

const titleStyle = {
  marginTop: 0,
  marginBottom: '20px',
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#333'
};

const uploadZoneStyle = {
  position: 'relative',
  border: '1.5px dashed #d0d0d0',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  overflow: 'hidden',
  transition: 'border 0.3s ease'
};