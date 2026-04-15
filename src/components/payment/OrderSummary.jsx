import React from 'react';

export default function OrderSummary({ modelId, modelType, imageSrc }) {
  const isAI = modelType === 'AI';

  return (
    <div style={{ 
      flex: '1', minWidth: '320px', backgroundColor: '#fff', padding: '40px', 
      borderRadius: '24px', border: '1px solid #eaeaea', boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
      display: 'flex', flexDirection: 'column'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '25px', fontSize: '1.3rem', fontWeight: '600', color: '#333', textTransform: 'uppercase', letterSpacing: '2px' }}>
        Récapitulatif
      </h3>
      
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        
        {/* Conteneur d'image adaptatif */}
        <div style={{ 
          width: '140px', // Un poil plus large pour mieux voir
          aspectRatio: '9/16', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          backgroundColor: '#f9f9f9', 
          border: '1px solid #eee',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexShrink: 0 // Empêche l'image de s'écraser si le texte à côté est long
        }}>
          {imageSrc ? (
            <img src={imageSrc} alt={modelId} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ textAlign: 'center', color: '#bbb', fontSize: '0.75rem', textTransform: 'uppercase', padding: '10px' }}>
              Image<br/>Non Fournie
            </div>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ 
            display: 'inline-block', padding: '6px 14px', borderRadius: '20px', 
            backgroundColor: isAI ? '#eaf5ea' : '#fff4e6', 
            color: isAI ? '#2d6a4f' : '#b25e0a',
            fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px'
          }}>
            {isAI ? 'Égérie IA' : 'Modèle Photo'}
          </div>
          <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: '#777' }}>Référence :</p>
          <p style={{ margin: '0', fontSize: '1.2rem', color: '#111', fontWeight: '600' }}>
            {modelId || 'N/A'}
          </p>
        </div>
      </div>

      {/* On pousse le total vers le bas */}
      <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ fontSize: '0.9rem', color: '#999', textTransform: 'uppercase' }}>Total</span>
          <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#111' }}>1 </span>
        </div>
      </div>
    </div>
  );
}