import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const qAnda = [
    {
        question: "Qu'est-ce que Luxaris et comment ça fonctionne ?",
        answer: "Luxaris est une plateforme qui vous permet de créer du contenu visuel avec des mannequins IA hybrides, offrant une flexibilité maximale pour vos campagnes marketing.",
    },
    {
        question: "Serai-je facturé(e) pour la taxe ?",
        answer: "Luxaris est tenu de facturer la taxe sur certains produits et services. La taxe est appliquée en fonction de votre localisation et/ou de votre statut professionnel/fiscal, ce qui détermine si un produit ou service est soumis à la taxe, ainsi que le taux de taxe applicable.",
    },
    {
        question: "Comment fonctionnent les remboursements ?",
        answer: "Les remboursements sont traités dans un délai de 5-7 jours ouvrables. Contactez notre équipe support pour initier une demande de remboursement.",
    },
];

const faqStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .faq-item {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }
  
  .faq-item:nth-child(1) { animation-delay: 0.1s; }
  .faq-item:nth-child(2) { animation-delay: 0.2s; }
  .faq-item:nth-child(3) { animation-delay: 0.3s; }
  
  .animate-scroll .faq-item {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;

export default function FAQAccordion() {
    const [openIndices, setOpenIndices] = useState(new Set());
    const scrollRef = useScrollAnimation();

    const toggleOpen = (index) => {
        setOpenIndices(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <>
            <style>{faqStyles}</style>
            <div className="space-y-0 animate-scroll" ref={scrollRef}>
                {qAnda.map((item, index) => (
                    <div
                        key={item.question}
                        className="border-b rounded-2xl border-slate-200 py-6 sm:py-7 border shadow-md drop-shadow-2xl my-4 last:border-b-0 faq-item"
                    >
                        <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-0">
                            <span className="flex-1 font-medium text-base md:text-lg mx-4 sm:text-lg text-[#4A001A]">
                                {item.question}
                            </span>
                            <button
                                onClick={() => toggleOpen(index)}
                                aria-label={openIndices.has(index) ? `Fermer la question: ${item.question}` : `Ouvrir la question: ${item.question}`}
                                aria-expanded={openIndices.has(index)}
                                className="shrink-0 hover:text-[#4A001A] transition-colors duration-300 ml-3"
                            >
                                {openIndices.has(index) ? (
                                    <Minus className="h-5 w-5 sm:h-6 sm:w-6 border rounded-md mx-5 bg-rose-50 text-[#4A001A] transition-transform duration-500 rotate-0" />
                                ) : (
                                    <Plus className="h-5 w-5 sm:h-6 sm:w-6 border rounded-md mx-5 text-slate-400 transition-transform duration-500 rotate-0" />
                                )}
                            </button>
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-600 ease-in-out ${openIndices.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed ml-8 sm:ml-10">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
