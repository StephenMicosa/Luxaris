import React from 'react';

export default function OrderSummary({ modelId, modelType, imageSrc, selectedBase, selectedOptions = [] }) {
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
      
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center', marginBottom: '30px' }}>
        <div style={{ width: '120px', aspectRatio: '9/16', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f9f9f9', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {imageSrc ? (
            <img src={imageSrc} alt={modelId} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div style={{ textAlign: 'center', color: '#bbb', fontSize: '0.75rem', textTransform: 'uppercase' }}>Image<br/>Non Fournie</div>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '20px', backgroundColor: isAI ? '#eaf5ea' : '#fff4e6', color: isAI ? '#2d6a4f' : '#b25e0a', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>
            {isAI ? 'Égérie IA' : 'Modèle Photo'}
          </div>
          <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: '#777' }}>Référence :</p>
          <p style={{ margin: '0', fontSize: '1.2rem', color: '#111', fontWeight: '600' }}>{modelId || 'N/A'}</p>
        </div>
      </div>

      {/* DÉTAIL DE LA COMMANDE */}
      <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '20px', flex: 1 }}>
        <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999', marginBottom: '15px' }}>Détail de la prestation</p>
        
        {/* Base */}
        {selectedBase && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: '500' }}>
            <span>{selectedBase.name}</span>
            <span>{selectedBase.prices[0].amount}</span>
          </div>
        )}

        {/* Options cochées */}
        {selectedOptions.map(opt => (
          <div key={opt.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#555' }}>
            <span>+ {opt.name}</span>
            <span>{opt.prices[0].amount}</span>
          </div>
        ))}
      </div>

      {/* FOOTER DEVIS */}
      <div style={{ marginTop: '30px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
          Le montant exact sera validé lors de l'établissement du devis final.
        </p>
      </div>

    </div>
  );
}