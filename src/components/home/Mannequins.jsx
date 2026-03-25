import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { mannequinTypes } from "../../data/mannequinsData";
import MannequinMenu from "./MannequinMenu";
import MannequinGrid from "./MannequinGrid";

const mannequinStyles = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out forwards;
  }
  
  .mannequin-card {
    animation: slideInRight 0.6s ease-out forwards;
    opacity: 0;
  }
  
  .mannequin-card:nth-child(1) { animation-delay: 0s; }
  .mannequin-card:nth-child(2) { animation-delay: 0.1s; }
  .mannequin-card:nth-child(3) { animation-delay: 0.2s; }
  .mannequin-card:nth-child(4) { animation-delay: 0.3s; }
  .mannequin-card:nth-child(5) { animation-delay: 0.4s; }
  .mannequin-card:nth-child(6) { animation-delay: 0.5s; }
`;

export default function Mannequins() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useScrollAnimation();

  return (
    <>
      <style>{mannequinStyles}</style>
      <section
        className="min-h-screen w-full bg-white py-20 px-4 animate-scroll"
        ref={scrollRef}
      >
        <div className="mx-auto max-w-6xl w-full">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#4A001A] mb-4 animate-slide-in-left">
            Des mannequins adaptés à chaque usage
          </h2>

          <p className="text-center text-slate-600 mb-6 max-w-3xl mx-auto animate-slide-in-right">
            Luxaris propose des mannequins réels et IA pour répondre aux besoins
            des marques dans différents contextes de production et de diffusion.
          </p>

          <div className="max-w-5xl mx-auto text-center text-slate-600 mb-12 space-y-2 animate-slide-in-right">
            <p><strong>Défilé :</strong> pour les événements mode, présentations et catwalk.</p>
            <p><strong>Publicité :</strong> pour les campagnes visuelles, contenus digitaux et e-commerce.</p>
            <p><strong>Fitness :</strong> pour les marques sport, bien-être et performance.</p>
            <p><strong>Cabine :</strong> pour les essayages, fittings et développement produit.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <MannequinMenu
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              mannequinTypes={mannequinTypes}
            />
            <MannequinGrid />
          </div>
        </div>
      </section>
    </>
  );
}
