import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialisation de Gemini avec ta clé d'environnement Vite
const API_KEY = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export default function GeminiTryOn() {
  const [clothingImage, setClothingImage] = useState(null);
  const [personImage, setPersonImage] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  // Fonction utilitaire pour convertir les fichiers images en Base64 (requis par Gemini)
  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  const handleImageUpload = (e, setImageFn) => {
    const file = e.target.files[0];
    if (file) {
      setImageFn(file);
    }
  };

  const handleGeminiRequest = async () => {
    if (!clothingImage || !personImage) {
      alert("Veuillez ajouter une image de vêtement et une image de personne.");
      return;
    }

    setLoading(true);
    setResult('');

    try {
      // Utilisation du modèle flash (rapide et capable de lire des images)
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Analyse ces deux images. La première est un vêtement, la deuxième est une personne. Décris comment ce vêtement irait à cette personne en fonction de sa morphologie et de son style apparent.";

      const imageParts = await Promise.all([
        fileToGenerativePart(clothingImage),
        fileToGenerativePart(personImage)
      ]);

      // Appel à l'API Gemini
      const generatedResult = await model.generateContent([prompt, ...imageParts]);
      const responseText = await generatedResult.response.text();
      
      setResult(responseText);
    } catch (error) {
      console.error("Erreur avec l'API Gemini :", error);
      setResult("Une erreur s'est produite lors de la communication avec Gemini.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Test Gemini : Vêtement & Personne</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          <strong>Image Vêtement :</strong>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => handleImageUpload(e, setClothingImage)} 
            style={{ display: 'block', marginTop: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          <strong>Image Personne :</strong>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => handleImageUpload(e, setPersonImage)} 
            style={{ display: 'block', marginTop: '5px' }}
          />
        </label>
      </div>

      <button 
        onClick={handleGeminiRequest} 
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        {loading ? 'Traitement en cours...' : 'Exécuter Gemini'}
      </button>

      <div style={{ marginTop: '30px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', minHeight: '100px' }}>
        <h3>Résultat :</h3>
        {/* On affiche le texte renvoyé par Gemini */}
        <p style={{ whiteSpace: 'pre-line' }}>{result || "Le résultat s'affichera ici."}</p>
      </div>
    </div>
  );
}