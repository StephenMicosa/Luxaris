import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const qAnda = [
  {
    question: "Comment se déroule la sélection d’un mannequin (réel ou virtuel) ?",
    answer:
      "Nous analysons votre brief (image de marque, cible, univers visuel), puis nous vous proposons une sélection sur-mesure de profils. Pour les mannequins virtuels, nous pouvons ajuster les caractéristiques (style, morphologie, expressions) selon vos besoins.",
  },
  {
    question: "Peut-on combiner mannequin réel et mannequin virtuel sur un même projet ?",
    answer:
      "Non, nous ne mélangeons pas directement les mannequins réels avec des contenus générés par IA. Cela fait partie de notre engagement envers la protection de l’image et de l’identité de nos mannequins. En revanche, nous pouvons créer des campagnes complémentaires, avec une direction artistique cohérente entre réel et virtuel, sans altérer l’intégrité des profils.",
  },
  {
    question: "Quel est le délai moyen pour lancer une collaboration ?",
    answer:
      "Pour un mannequin réel, comptez quelques jours selon les disponibilités. Pour un mannequin virtuel, la création peut être beaucoup plus rapide (24 à 72h selon la complexité).",
  },
  {
    question: "Les visuels générés sont-ils réalistes ?",
    answer:
      "Nos modèles sont conçus pour atteindre un niveau de réalisme élevé, adapté aux campagnes publicitaires, réseaux sociaux et e-commerce.",
  },
  {
    question: "Quels sont les droits d’utilisation des visuels ?",
    answer:
      "Les droits dépendent de votre formule. Nous proposons différentes licences (réseaux sociaux, publicité, usage commercial étendu…). Tout est précisé avant validation.",
  },
  {
    question: "Les mannequins virtuels sont-ils efficaces pour vendre ?",
    answer:
      "Oui, lorsqu’ils sont bien intégrés à une stratégie marketing. Ils permettent de capter l’attention, de se démarquer et de créer une identité forte.",
  },
  {
    question: "Travaillez-vous avec des marques concurrentes ?",
    answer:
      "Nous pouvons garantir une exclusivité selon les projets et les contrats. Cela peut faire l’objet d’une option spécifique.",
  },
  {
    question: "Les projets sont-ils confidentiels ?",
    answer:
      "Oui, toutes les collaborations sont traitées avec discrétion. Des accords de confidentialité (NDA) peuvent être signés.",
  },
];

const faqStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .faq-item {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-scroll .faq-item {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;

export default function FAQAccordion() {
  const [openIndices, setOpenIndices] = useState(new Set());
  const scrollRef = useScrollAnimation();

  const toggleOpen = (index) => {
    setOpenIndices((prev) => {
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
      <div className="space-y-4 animate-scroll" ref={scrollRef}>
        {qAnda.map((item, index) => (
          <div
            key={item.question}
            className="faq-item rounded-2xl border border-slate-200 bg-white py-6 shadow-md"
            style={{ animationDelay: `${0.1 + index * 0.06}s` }}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="mx-4 flex-1 text-base font-medium text-[#4A001A] md:text-lg">
                {item.question}
              </span>
              <button
                onClick={() => toggleOpen(index)}
                aria-label={openIndices.has(index) ? `Fermer la question: ${item.question}` : `Ouvrir la question: ${item.question}`}
                aria-expanded={openIndices.has(index)}
                className="mr-4 shrink-0 transition-colors duration-300 hover:text-[#4A001A]"
              >
                {openIndices.has(index) ? (
                  <Minus className="h-6 w-6 rounded-md border bg-rose-50 text-[#4A001A]" />
                ) : (
                  <Plus className="h-6 w-6 rounded-md border text-slate-400" />
                )}
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndices.has(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="mx-4 mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
