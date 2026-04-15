import React, { useState, useEffect, useRef } from 'react';

// --- STEP 1: VERIFY PATHS (Check Case Sensitivity) ---
import F1_AS from '../assets/Mannequin/femme(F)/F1_CPA_AS.png'; 
import F1_DB from '../assets/Mannequin/femme(F)/F1_DB_PL.png'; 
import F1_PC from '../assets/Mannequin/femme(F)/F1_PC.png';    
import F1_AL from '../assets/Mannequin/femme(F)/F1_AL.png';

import F2_AS from '../assets/Mannequin/femme(F)/F2_CPA_AS.png';
import F2_DB from '../assets/Mannequin/femme(F)/F2_DB_PL.png';
import F2_PC from '../assets/Mannequin/femme(F)/F2_PC.png';
import F2_AL from '../assets/Mannequin/femme(F)/F2_AL.png';

import H1_AS from '../assets/Mannequin/homme(H)/H1_CPA_AS.png';
import H1_DB from '../assets/Mannequin/homme(H)/H1_DB_PL.png';
import H1_PC from '../assets/Mannequin/homme(H)/H1_PC.png';

import H2_AS from '../assets/Mannequin/homme(H)/H2_CPA_AS.png';
import H2_DB from '../assets/Mannequin/homme(H)/H2_DB_PL.png';
import H2_PC from '../assets/Mannequin/homme(H)/H2_PC.png';

const MANNEQUINS = [
  {
    id: 'F1',
    name: 'DIANA', 
    poses: { portrait: F1_PC, assis: F1_AS, debout: F1_DB, allonge: F1_AL }
  },
  {
    id: 'F2',
    name: 'MAIA', 
    poses: { portrait: F2_PC, assis: F2_AS, debout: F2_DB, allonge: F2_AL }
  },
  {
    id: 'H1',
    name: 'LIAM', 
    poses: { portrait: H1_PC, assis: H1_AS, debout: H1_DB }
  },
  {
    id: 'H2',
    name: 'JULIAN', 
    poses: { portrait: H2_PC, assis: H2_AS, debout: H2_DB }
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
};

// --- Desktop Component ---
const MannequinCardDesktop = ({ model, onSelect }) => {
  const availablePoses = Object.keys(model.poses);
  const defaultPose = availablePoses.includes('debout') ? 'debout' : availablePoses[0];

  const [currentPose, setCurrentPose] = useState(defaultPose);
  const [isHovered, setIsHovered] = useState(false);

  // Debug check
  if (!model.poses[currentPose]) {
    console.error(`Pose "${currentPose}" missing for ${model.name}`);
  }

  return (
    <div 
      onClick={() => onSelect(model.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setCurrentPose(defaultPose); }}
      style={{
        cursor: 'pointer',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '20px',
        border: isHovered ? '1px solid #4a0b19' : '1px solid #eee',
        transition: 'all 0.3s ease',
        textAlign: 'center'
      }}
    >
      <div style={{
        width: '100%',
        aspectRatio: '9/16',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#f9f9f9'
      }}>
        <img 
          src={model.poses[currentPose]} 
          alt={model.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />

        {/* Hover Zones: Each zone is 1/N of the image width */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', zIndex: 10 }}>
          {availablePoses.map((poseKey) => (
            <div 
              key={poseKey}
              style={{ flex: 1, height: '100%' }} 
              onMouseEnter={() => setCurrentPose(poseKey)} 
            />
          ))}
        </div>

        {/* Dots */}
        <div style={{ 
          position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '6px', zIndex: 5, opacity: isHovered ? 1 : 0
        }}>
          {availablePoses.map(poseKey => (
            <div key={poseKey} style={{
              width: '6px', height: '6px', borderRadius: '50%',
              backgroundColor: currentPose === poseKey ? '#4a0b19' : '#ccc'
            }} />
          ))}
        </div>
      </div>
      <h3 style={{ marginTop: '15px', fontWeight: '600' }}>{model.name}</h3>
    </div>
  );
};

// --- Mobile Component ---
const MannequinCardMobile = ({ model, onSelect }) => {
  const availablePoses = Object.keys(model.poses);
  const carouselRef = useRef(null);
  const [activePoseIdx, setActivePoseIdx] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const idx = Math.round(carouselRef.current.scrollLeft / carouselRef.current.offsetWidth);
      setActivePoseIdx(idx);
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '15px', marginBottom: '20px', border: '1px solid #eee' }}>
      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        style={{
          width: '100%', aspectRatio: '9/16', borderRadius: '12px', overflowX: 'auto',
          display: 'flex', scrollSnapType: 'x mandatory', scrollbarWidth: 'none'
        }}
      >
        {availablePoses.map((poseKey) => (
          <div key={poseKey} style={{ flex: '0 0 100%', scrollSnapAlign: 'start' }}>
            <img src={model.poses[poseKey]} alt={poseKey} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <h3 style={{ margin: 0 }}>{model.name}</h3>
        <div style={{ display: 'flex', gap: '4px' }}>
          {availablePoses.map((_, i) => (
            <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: i === activePoseIdx ? '#4a0b19' : '#ddd' }} />
          ))}
        </div>
      </div>
      <button onClick={() => onSelect(model.id)} style={{ width: '100%', marginTop: '10px', padding: '10px', backgroundColor: '#4a0b19', color: '#fff', border: 'none', borderRadius: '25px' }}>
        Sélectionner
      </button>
    </div>
  );
};

export default function AIMannequins() {
  const isMobile = useIsMobile();
  const handleSelect = (id) => window.location.href = `/paiement?model=${id}&type=AI`;

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '50px 20px' }}>
      
    {/* --- LUXARIS HEADER SECTION --- */}
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
      <h2 style={{ 
        fontSize: isMobile ? '1.8rem' : '2.8rem', 
        fontWeight: '300', 
        color: '#111', 
        margin: '0 0 10px 0', 
        letterSpacing: '6px', // Wide spacing for a luxury feel
        textTransform: 'uppercase'
      }}>
        nos <span style={{ color: '#4a0b19', fontWeight: '700' }}>Models</span>
      </h2>
      
      {/* Elegant thin separator line */}
      <div style={{ 
        width: '50px', 
        height: '1px', 
        backgroundColor: '#4a0b19', 
        margin: '0 auto 25px auto' 
      }}></div>

      <p style={{ 
        fontSize: '1rem', 
        color: '#777', 
        maxWidth: '450px', 
        margin: '0 auto', 
        lineHeight: '1.5',
        fontWeight: '400',
        letterSpacing: '0.5px'
      }}>
        Sélectionnez le model de votre prochaine campagne <br /> 
        en cliquant sur le profil de votre choix.
      </p>
    </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '30px' 
      }}>
        {MANNEQUINS.map((model) => (
          isMobile ? 
            <MannequinCardMobile key={model.id} model={model} onSelect={handleSelect} /> : 
            <MannequinCardDesktop key={model.id} model={model} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
}