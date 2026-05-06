import React, { useRef, useState } from 'react';
// IMPORT DE TON SERVICE (Le chemin correspond à ton dossier src/hooks/)
// Si ton formulaire est dans src/components/, on remonte d'un dossier avec ../
import { sendEmail } from '../../hooks/emailService';

export default function PaymentForm({ onSubmit }) {
  // 1. On crée une référence pour relier le HTML au code JavaScript
  const form = useRef();
  
  // 2. On gère les états d'envoi pour l'expérience utilisateur
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    setIsSending(true);

    // 3. ON APPELLE TON SERVICE EMAILJS ICI
    const response = await sendEmail(form, 'template_5tmnxez');

    if (response.success) {
      setIsSent(true); // Affiche le message de succès
      if (onSubmit) onSubmit(); // Exécute l'action de la page parente si elle existe
    } else {
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    }
    
    setIsSending(false);
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

  // Si le message est envoyé avec succès, on affiche cette vue
  if (isSent) {
    return (
      <div style={{ flex: '1', minWidth: '320px', backgroundColor: '#fcfcfc', padding: '40px', borderRadius: '24px', border: '1px solid #eaeaea', textAlign: 'center' }}>
        <h3 style={{ color: '#4a0b19', fontSize: '1.5rem', marginBottom: '15px' }}>Merci !</h3>
        <p style={{ color: '#666', lineHeight: '1.5' }}>
          Votre projet a bien été envoyé.<br/>
          Notre équipe reviendra vers vous sous peu à l'adresse indiquée.
        </p>
      </div>
    );
  }

  return (
    // On ajoute le "ref={form}" indispensable pour EmailJS
    <form 
      ref={form} 
      onSubmit={handleSubmit}
      style={{ 
        flex: '1', minWidth: '320px', backgroundColor: '#fcfcfc', 
        padding: '40px', borderRadius: '24px', border: '1px solid #eaeaea' 
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: '25px', fontSize: '1.3rem', fontWeight: '600', color: '#333' }}>
        1. Vos informations
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
        <div>
          <label style={labelStyle}>Adresse e-mail</label>
          {/* L'attribut name="user_email" doit correspondre à la variable {{user_email}} de ton template EmailJS */}
          <input type="email" name="user_email" placeholder="votre@email.com" style={inputStyle} required />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Prénom</label>
            <input type="text" name="user_firstname" placeholder="Prénom" style={inputStyle} required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nom</label>
            <input type="text" name="user_lastname" placeholder="Nom" style={inputStyle} required />
          </div>
        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: '#eee', marginBottom: '30px' }}></div>

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
            name="message" 
            placeholder="Ex: J'aimerais réaliser un shooting pour ma nouvelle collection d'été avec 3 modèles..." 
            style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }} 
            required
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSending}
        style={{
          width: '100%', padding: '16px', borderRadius: '50px', border: 'none',
          backgroundColor: isSending ? '#8c4858' : '#4a0b19', // Le bouton s'éclaircit pendant l'envoi
          color: '#fff', fontSize: '1.1rem', 
          fontWeight: '600', cursor: isSending ? 'not-allowed' : 'pointer', marginTop: '25px',
          transition: 'all 0.2s'
        }}
      >
        {isSending ? 'Envoi en cours...' : 'Envoyer ma demande'}
      </button>

      <p style={{ textAlign: 'center', margin: '20px 0 0 0', fontSize: '0.8rem', color: '#aaa' }}>
        Nous vous recontacterons sous 24h.
      </p>
    </form>
  );
}