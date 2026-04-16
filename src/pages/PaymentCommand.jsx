import React, { useEffect, useState } from 'react';
import CommandHeader from '../components/payment/CommandHeader';
import OrderSummary from '../components/payment/OrderSummary';
import PaymentForm from '../components/payment/PaymentForm';

// Tes imports d'images manuels pour l'IA
import F1_PC from '../assets/Mannequin/femme(F)/F1_PC.png';
import F2_PC from '../assets/Mannequin/femme(F)/F2_PC.png';
import H1_PC from '../assets/Mannequin/homme(H)/H1_PC.png';
import H2_PC from '../assets/Mannequin/homme(H)/H2_PC.png';

const AI_IMAGES = { 'F1': F1_PC, 'F2': F2_PC, 'H1': H1_PC, 'H2': H2_PC };
const photoGlob = import.meta.glob('../assets/Photos/**/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

export default function PaymentCommand() {
  const [order, setOrder] = useState({ id: '', type: 'Shooting', src: null });
  const [loading, setLoading] = useState(true);
  
  // NOUVEAU : On stocke la prestation de base et les options supplémentaires
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = (urlParams.get('model') || '').trim();
    const typeParam = (urlParams.get('type') || '').trim();

    if (idParam) {
      const isShooting = typeParam.toLowerCase() === 'shooting';
      let foundSrc = null;

      if (isShooting) {
        const matchedPath = Object.keys(photoGlob).find(path => path.includes(idParam));
        if (matchedPath) foundSrc = photoGlob[matchedPath];
      } else {
        foundSrc = AI_IMAGES[idParam.toUpperCase()] || null;
      }

      setOrder({ id: idParam, type: isShooting ? 'Shooting' : 'AI', src: foundSrc });
    }
    setLoading(false);
  }, []);

  const handleFinalAction = () => {
    alert(`Commande validée pour : ${order.id}\nBase: ${selectedBase?.name}\nOptions: ${selectedOptions.length}`);
  };

  if (loading) return null;

  return (
    <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
      <CommandHeader title="Finaliser" subtitle="la commande" />

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'stretch' }}>
        {/* On envoie les choix au récapitulatif */}
        <OrderSummary 
          modelId={order.id} 
          modelType={order.type} 
          imageSrc={order.src}
          selectedBase={selectedBase}
          selectedOptions={selectedOptions}
        />
        
        {/* On envoie le type de modèle et les fonctions pour modifier les choix */}
        <PaymentForm 
          onSubmit={handleFinalAction} 
          modelType={order.type}
          selectedBase={selectedBase}
          setSelectedBase={setSelectedBase}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>
    </main>
  );
}