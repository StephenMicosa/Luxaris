import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function VirtualTryOn() {
  const [imageResult, setImageResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); 
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

  const fileToGenerativePart = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve({
        inlineData: {
          data: reader.result.split(',')[1],
          mimeType: file.type
        },
      });
      reader.readAsDataURL(file);
    });
  };

  const runTryOn = async (e) => {
    e.preventDefault();
    console.log("🚀 Start Try-On process");

    if (!apiKey) {
      setError("Variable VITE_API_KEY non trouvée. Vérifie ton fichier .env et redémarre Vite.");
      return;
    }

    setLoading(true);
    setError(null);
    setImageResult(null);

    try {
      const personFile = e.target.person.files[0];
      const garmentFile = e.target.garment.files[0];

      if (!personFile || !garmentFile) {
        throw new Error("Veuillez sélectionner les deux images.");
      }

      // ÉTAPE 1 : Lecture des fichiers
      setStatus("Reading your images...");
      const imageParts = await Promise.all([
        fileToGenerativePart(personFile),
        fileToGenerativePart(garmentFile)
      ]);
      console.log("✅ Images read successfully");

      // ÉTAPE 2 : Boucle de secours pour les modèles (Fallback)
      // On teste les noms possibles en 2026 pour éviter le 404
      const modelsToTry = ["gemini-2.5-flash-image"];
      let lastError = null;

      const prompt = `
        ROLE: High-end AI Fashion Virtual Try-On Engine.
        TASK: Photorealistic garment transfer.
        INSTRUCTIONS: 
        - Replace the upper-body clothing of the person in Image 1 with the garment from Image 2.
        - STRONGLY PRESERVE the person's face, pose, and background.
        - Adapt the garment realistically to the body shape with natural folds.
        OUTPUT: Return ONLY the final composited image.
      `;

      for (const modelName of modelsToTry) {
        try {
          setStatus(`Connecting to ${modelName}...`);
          const model = genAI.getGenerativeModel({ model: modelName });
          
          setStatus(`AI is tailoring (using ${modelName})...`);
          const result = await model.generateContent([prompt, ...imageParts]);
          const response = await result.response;
          
          const imagePart = response.candidates[0].content.parts.find(p => p.inlineData);
          
          if (imagePart) {
            setImageResult(`data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`);
            setStatus("Done!");
            return; // On sort de la fonction dès que ça marche !
          }
        } catch (err) {
          console.warn(`Model ${modelName} failed, trying next...`);
          lastError = err;
        }
      }

      // Si on arrive ici, c'est que tous les modèles ont échoué
      throw lastError || new Error("All models failed to respond.");

    } catch (err) {
      console.error("Critical Error:", err);
      setError(`Error: ${err.message}`);
      setStatus("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#333' }}>✨ AI Virtual Try-On Studio</h2>
      
      <form onSubmit={runTryOn} style={{ 
        display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '450px', 
        margin: '0 auto', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
      }}>
        <div style={{ textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>1. Upload Model Photo</label>
          <input type="file" name="person" accept="image/*" required style={{ width: '100%' }} />
        </div>

        <div style={{ textAlign: 'left' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>2. Upload Garment Photo</label>
          <input type="file" name="garment" accept="image/*" required style={{ width: '100%' }} />
        </div>
        
        <button 
          type="submit" 
          disabled={loading} 
          style={{ 
            padding: '14px', 
            cursor: loading ? 'not-allowed' : 'pointer',
            backgroundColor: loading ? '#666' : '#000',
            color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px',
            transition: 'all 0.3s'
          }}
        >
          {loading ? `⏳ ${status}` : "Generate Try-On"}
        </button>
      </form>

      {error && (
        <div style={{ color: '#ff4d4d', marginTop: '20px', padding: '10px', background: '#fff1f1', borderRadius: '8px' }}>
          <strong>⚠️ {error}</strong>
        </div>
      )}

      {imageResult && (
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ marginBottom: '15px' }}>Your Result:</h3>
          <img src={imageResult} alt="AI Result" style={{ 
            maxWidth: '100%', 
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)' 
          }} />
        </div>
      )}
    </div>
  );
}

