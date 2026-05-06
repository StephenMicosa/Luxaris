import React from 'react';

export default function ProjectForm({ onSubmit }) {
  
  // Cette fonction intercepte l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut
    if (onSubmit) {
      onSubmit(); // Déclenche l'action que tu as définie dans le composant parent
    }
  };

  const inputStyle = {
    padding: '16px', 
    borderRadius: '8px', 
    backgroundColor: '#fff', 
    border: '1px solid #ddd', 
    fontSize: '0.95rem', 
    width: '100%', 
    outline: 'none',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#444'
  };

  return (
    // On remplace la <div> principale par une balise <form>
    <form 
      onSubmit={handleSubmit}
      style={{ 
        flex: '1', minWidth: '320px', backgroundColor: '#fcfcfc', 
        padding: '40px', borderRadius: '24px', border: '1px solid #eaeaea' 
      }}
    >
      
      {/* 1. INFORMATIONS */}
      <h3 style={{ marginTop: 0, marginBottom: '25px', fontSize: '1.3rem', fontWeight: '600', color: '#333' }}>
        1. Vos informations
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
        <div>
          <label style={labelStyle}>Adresse e-mail</label>
          <input type="email" placeholder="votre@email.com" style={inputStyle} required />
          <small style={{ color: '#999', fontSize: '0.75rem', marginTop: '5px', display: 'block' }}>
            Pour échanger avec vous sur votre projet.
          </small>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Prénom</label>
            <input type="text" placeholder="Prénom" style={inputStyle} required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nom</label>
            <input type="text" placeholder="Nom" style={inputStyle} required />
          </div>
        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: '#eee', marginBottom: '30px' }}></div>

      {/* 2. LE PROJET */}
      <h3 style={{ marginBottom: '15px', fontSize: '1.3rem', fontWeight: '600', color: '#333' }}>
        2. Votre projet
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5', margin: '0 0 10px 0' }}>
          Parlez-nous de vos besoins. Nous vous recontacterons très vite pour en discuter de vive voix et établir un devis sur-mesure.
        </p>

        <div>
          <label style={labelStyle}>Description de votre projet</label>
          <textarea 
            placeholder="Ex: J'aimerais réaliser un shooting pour ma nouvelle collection d'été avec 3 modèles..." 
            style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }} 
            required
          />
        </div>
      </div>

      <button 
        type="submit" 
        style={{
          width: '100%', padding: '16px', borderRadius: '50px', border: 'none',
          backgroundColor: '#4a0b19', color: '#fff', fontSize: '1.1rem', 
          fontWeight: '600', cursor: 'pointer', marginTop: '25px',
          transition: 'opacity 0.2s'
        }}
        onMouseOver={(e) => e.target.style.opacity = '0.9'}
        onMouseOut={(e) => e.target.style.opacity = '1'}
      >
        Envoyer ma demande
      </button>

      <p style={{ textAlign: 'center', margin: '20px 0 0 0', fontSize: '0.8rem', color: '#aaa' }}>
        Nous vous recontacterons sous 24h.
      </p>
    </form>
  );
}