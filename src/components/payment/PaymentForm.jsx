import React, { useState, useEffect } from 'react';
// IMPORT DE TES DONNÉES (Vérifie bien le chemin)
import { aiMannequinsData, realMannequinsData } from '../../data/priceData.jsx';

export default function PaymentForm({ 
  onSubmit, modelType, 
  selectedBase, setSelectedBase, 
  selectedOptions, setSelectedOptions 
}) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Déterminer quelles données utiliser (IA ou Réel)
  const dataList = modelType === 'AI' ? aiMannequinsData : realMannequinsData;
  const baseService = dataList[0]; // Le 1er élément est le pack de base
  const addons = dataList.slice(1); // Le reste, ce sont les suppléments

  // Sélectionner le pack de base par défaut au chargement
  useEffect(() => {
    if (!selectedBase) setSelectedBase(baseService);
  }, [baseService, selectedBase, setSelectedBase]);

  // Gérer les cases à cocher multiples
  const toggleOption = (option) => {
    if (selectedOptions.find(opt => opt.id === option.id)) {
      setSelectedOptions(selectedOptions.filter(opt => opt.id !== option.id));
    } else {
      setSelectedOptions([...selectedOptions, option]);
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
    <div style={{ 
      flex: '1', minWidth: '320px', backgroundColor: '#fcfcfc', 
      padding: '40px', borderRadius: '24px', border: '1px solid #eaeaea' 
    }}>
      
      {/* 1. INFORMATIONS */}
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

      <div style={{ height: '1px', backgroundColor: '#eee', marginBottom: '30px' }}></div>

      {/* 2. PRESTATION (La fameuse cascade) */}
      <h3 style={{ marginBottom: '25px', fontSize: '1.3rem', fontWeight: '600', color: '#333' }}>
        2. Votre Prestation
      </h3>
      
      <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        {/* Le forfait de base */}
        <div style={{ padding: '15px', border: '1px solid #4a0b19', borderRadius: '8px', backgroundColor: '#fff5f7', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <strong>{baseService.name}</strong>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>{baseService.details[0].text}</div>
          </div>
          <strong style={{ color: '#4a0b19' }}>{baseService.prices[0].amount}</strong>
        </div>

        <p style={{ margin: '10px 0 5px', fontSize: '0.9rem', fontWeight: 'bold' }}>Options supplémentaires :</p>
        
        {/* Les cases à cocher pour les suppléments */}
        {addons.map(addon => {
          const isChecked = selectedOptions.some(opt => opt.id === addon.id);
          return (
            <label key={addon.id} style={{ 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 15px', 
              border: isChecked ? '1px solid #4a0b19' : '1px solid #eaeaea', 
              borderRadius: '8px', cursor: 'pointer', backgroundColor: '#fff',
              transition: 'all 0.2s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                  type="checkbox" 
                  checked={isChecked} 
                  onChange={() => toggleOption(addon)}
                  style={{ accentColor: '#4a0b19', width: '18px', height: '18px' }}
                />
                <span style={{ fontSize: '0.95rem' }}>{addon.name}</span>
              </div>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>{addon.prices[0].amount}</span>
            </label>
          );
        })}
      </div>

      <div style={{ height: '1px', backgroundColor: '#eee', marginBottom: '30px' }}></div>

      {/* 3. PAIEMENT */}
      <h3 style={{ marginBottom: '25px', fontSize: '1.3rem', fontWeight: '600', color: '#333' }}>
        3. Paiement
      </h3>
      
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        {/* Bouton Carte (Avec TES URLs exactes) */}
        <button 
          onClick={() => setPaymentMethod('card')}
          style={{ 
            flex: 1, padding: '15px', cursor: 'pointer', backgroundColor: '#fff',
            border: paymentMethod === 'card' ? '2px solid #4a0b19' : '1px solid #eaeaea', 
            borderRadius: '12px', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', boxShadow: paymentMethod === 'card' ? '0 4px 12px rgba(74, 11, 25, 0.08)' : 'none'
          }}
        >
          <img src="https://www.prestasoo.com/images/logo-cb.jpg" alt="CB" style={{ height: '18px' }} />
          <img src="https://campusbee.ug/wp-content/uploads/2017/08/visa-logo.png" alt="Visa" style={{ height: '12px' }} />
          <img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo-2016-2020.png" alt="Mastercard" style={{ height: '20px' }} />
        </button>

        {/* Bouton PayPal (Avec TON URL exacte) */}
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
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '10px 0' }}>
          <p style={{ color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>
            Vous allez être redirigé vers PayPal pour confirmer votre paiement.
          </p>
        </div>
      )}

      <button 
        onClick={onSubmit}
        style={{
          width: '100%', padding: '16px', borderRadius: '50px', border: 'none',
          backgroundColor: '#4a0b19', color: '#fff', fontSize: '1.1rem', 
          fontWeight: '600', cursor: 'pointer', marginTop: '15px'
        }}
      >
        Valider la sélection
      </button>

      <p style={{ textAlign: 'center', margin: '25px 0 0 0', fontSize: '0.8rem', color: '#aaa' }}>
        Transaction sécurisée
      </p>
    </div>
  );
}