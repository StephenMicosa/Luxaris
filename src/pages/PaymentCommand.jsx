import React, { useEffect, useState } from 'react';
import CommandHeader from '../components/payment/CommandHeader';
import OrderSummary from '../components/payment/OrderSummary';
import PaymentForm from '../components/payment/PaymentForm';

// 1. LA SOLUTION BLINDÉE POUR LES IA : Imports manuels (qui marchent déjà sur ton site)
import F1_PC from '../assets/Mannequin/femme(F)/F1_PC.png';
import F2_PC from '../assets/Mannequin/femme(F)/F2_PC.png';
import H1_PC from '../assets/Mannequin/homme(H)/H1_PC.png';
import H2_PC from '../assets/Mannequin/homme(H)/H2_PC.png';

// On mappe les ID directement sur l'image importée
const AI_IMAGES = {
  'F1': F1_PC,
  'F2': F2_PC,
  'H1': H1_PC,
  'H2': H2_PC,
};

// 2. On garde la recherche auto UNIQUEMENT pour les shootings (dossier sans parenthèses)
const photoGlob = import.meta.glob('../assets/Photos/**/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

export default function PaymentCommand() {
  const [order, setOrder] = useState({ id: '', type: 'Shooting', src: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupération de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('model');
    const typeParam = urlParams.get('type') || ''; 

    if (idParam) {
      const isShooting = typeParam.toLowerCase() === 'shooting';
      let foundSrc = null;

      if (isShooting) {
        // --- LOGIQUE SHOOTING ---
        // Cherche le fichier contenant l'ID (ex: 101810) dans le dossier Photos
        const matchedPath = Object.keys(photoGlob).find(path => path.includes(idParam));
        if (matchedPath) foundSrc = photoGlob[matchedPath];

      } else {
        // --- LOGIQUE IA (Infaillible) ---
        // On pioche directement dans notre dictionnaire avec l'ID (ex: "F2")
        const upperId = idParam.toUpperCase();
        foundSrc = AI_IMAGES[upperId] || null;
      }

      setOrder({ 
        id: idParam, 
        type: isShooting ? 'Shooting' : 'AI', 
        src: foundSrc 
      });
    }
    
    setLoading(false);
  }, []);

  const handleFinalAction = () => {
    alert(`Commande validée pour l'ID : ${order.id}`);
  };

  if (loading) return null;

  return (
    <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
      <CommandHeader title="Finaliser" subtitle="la commande" />

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'stretch' }}>
        <OrderSummary 
          modelId={order.id} 
          modelType={order.type} 
          imageSrc={order.src} 
        />
        <PaymentForm onSubmit={handleFinalAction} />
      </div>
    </main>
  );
}