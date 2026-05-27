import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
const REAL_MODEL_FOLDERS = {
  'real-01': 'woman1',
  'real-02': 'man1',
  'real-03': 'duo1',
  'real-04': 'trio',
};

const getFirstPhotoFromFolder = (folderName) => {
  const matchedEntry = Object.entries(photoGlob)
    .filter(([path]) => path.includes(`/Photos/${folderName}/`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))[0];

  return matchedEntry?.[1] || null;
};

export default function PaymentCommand() {
  const navigate = useNavigate();
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
        const folderName = REAL_MODEL_FOLDERS[idParam.toLowerCase()];
        foundSrc = folderName ? getFirstPhotoFromFolder(folderName) : null;
      } else {
        foundSrc = AI_IMAGES[idParam.toUpperCase()] || null;
      }

      setOrder({ id: idParam, type: isShooting ? 'Shooting' : 'AI', src: foundSrc });
    }
    setLoading(false);
  }, []);

  const handleFinalAction = () => {
    window.scrollTo(0, 0);
  };

  const handleReturn = () => {
    navigate(order.type === 'AI' ? '/ai-models' : '/real-models');
  };

  if (loading) return null;

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '7rem 20px 60px' }}>
      <button
        type="button"
        onClick={handleReturn}
        aria-label="Retour"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '30px',
          padding: '10px 16px',
          borderRadius: '999px',
          border: '1px solid #e5e5e5',
          backgroundColor: '#fff',
          color: '#4a0b19',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}
      >
        <ArrowLeft size={16} strokeWidth={2.2} aria-hidden="true" />
        Retour
      </button>

      <CommandHeader title="Finaliser" subtitle="la demande" />

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
