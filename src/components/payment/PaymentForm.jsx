import React, { useState } from 'react';

/**
 * Payment and Contact Form Component
 * Handles user identification and secure payment method selection.
 */
export default function PaymentForm({ onSubmit }) {
  // Payment method state ('card' or 'paypal')
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Shared input styling
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
    <div style={{ 
      flex: '1', minWidth: '320px', backgroundColor: '#fcfcfc', 
      padding: '40px', borderRadius: '24px', border: '1px solid #eaeaea' 
    }}>
      
      {/* --- SECTION 1: CONTACT INFO --- */}
      <h3 style={{ marginTop: 0, marginBottom: '25px', fontSize: '1.3rem', fontWeight: '600', color: '#333' }}>
        1. Vos informations
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
        <div>
          <label style={labelStyle}>Adresse e-mail</label>
          <input type="email" placeholder="votre@email.com" style={inputStyle} />
          <small style={{ color: '#999', fontSize: '0.75rem', marginTop: '5px', display: 'block' }}>
            Pour l'envoi de votre commande.
          </small>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Prénom</label>
            <input type="text" placeholder="Prénom" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nom</label>
            <input type="text" placeholder="Nom" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Separator */}
      <div style={{ height: '1px', backgroundColor: '#eee', marginBottom: '30px' }}></div>

      {/* --- SECTION 2: PAYMENT METHOD --- */}
      <h3 style={{ marginBottom: '25px', fontSize: '1.3rem', fontWeight: '600', color: '#333' }}>
        2. Paiement
      </h3>
      
      {/* Method Selector */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        
        {/* Credit Card Button */}
        <button 
          onClick={() => setPaymentMethod('card')}
          style={{ 
            flex: 1, padding: '15px', cursor: 'pointer', backgroundColor: '#fff',
            border: paymentMethod === 'card' ? '2px solid #4a0b19' : '1px solid #eaeaea', 
            borderRadius: '12px', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', boxShadow: paymentMethod === 'card' ? '0 4px 12px rgba(74, 11, 25, 0.08)' : 'none'
          }}
        >
          {/* Direct stable URLs for logos */}
          <img src="https://www.prestasoo.com/images/logo-cb.jpg" alt="CB" style={{ height: '18px' }} />
          <img src="https://campusbee.ug/wp-content/uploads/2017/08/visa-logo.png" alt="Visa" style={{ height: '12px' }} />
          <img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2016-2020.png" alt="Mastercard" style={{ height: '20px' }} />
        </button>

        {/* PayPal Button */}
        <button 
          onClick={() => setPaymentMethod('paypal')}
          style={{ 
            flex: 1, padding: '15px', cursor: 'pointer', backgroundColor: '#fff',
            border: paymentMethod === 'paypal' ? '2px solid #4a0b19' : '1px solid #eaeaea', 
            borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', boxShadow: paymentMethod === 'paypal' ? '0 4px 12px rgba(74, 11, 25, 0.08)' : 'none'
          }}
        >
          <img src="https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Picture.png" alt="PayPal" style={{ height: '20px' }} />
        </button>
      </div>
      
      {/* Conditional Content */}
      {paymentMethod === 'card' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={labelStyle}>Titulaire de la carte</label>
            <input type="text" placeholder="NOM PRÉNOM" style={inputStyle} />
          </div>
          
          <div>
            <label style={labelStyle}>Numéro de carte</label>
            <div style={{ ...inputStyle, display: 'flex', justifyContent: 'space-between', color: '#999' }}>
              <span>0000 0000 0000 0000</span>
              <span style={{ fontSize: '0.85rem' }}>MM/AA CVC</span>
            </div>
          </div>
          
          <button 
            onClick={onSubmit}
            style={{
              width: '100%', padding: '16px', borderRadius: '50px', border: 'none',
              backgroundColor: '#4a0b19', color: '#fff', fontSize: '1.1rem', 
              fontWeight: '600', cursor: 'pointer', marginTop: '15px'
            }}
          >
            Payer 1 Crédit
          </button>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '10px 0' }}>
          <p style={{ color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>
            Vous allez être redirigé vers PayPal pour confirmer votre paiement.
          </p>
          <button 
            onClick={onSubmit}
            style={{
              width: '100%', padding: '16px', borderRadius: '50px', border: 'none',
              backgroundColor: '#ffc439', color: '#000', fontSize: '1.1rem', 
              fontWeight: '600', cursor: 'pointer'
            }}
          >
            Continuer vers PayPal
          </button>
        </div>
      )}

      <p style={{ textAlign: 'center', margin: '25px 0 0 0', fontSize: '0.8rem', color: '#aaa' }}>
      Transaction sécurisée
      </p>
    </div>
  );
}