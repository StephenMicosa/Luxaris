import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

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

    const mannequinTypes = [
        { label: "Mannequin défilé" },
        { label: "Mannequin publicité" },
        { label: "Mannequin Fitness" },
        { label: "Mannequin cabine" },
    ];

    return (
        <>
        <style>{mannequinStyles}</style>
        <section className="min-h-screen w-full bg-white py-20 px-4 animate-scroll" ref={scrollRef}>
            <div className="mx-auto max-w-6xl w-full">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-[#4A001A] mb-4 animate-slide-in-left">
                    Tout-en-un : votre mannequin <br />
                    virtuel prêt à l&apos;emploi
                </h2>

                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto animate-slide-in-right">
                    Une plateforme unique pour orchestrer votre présence visuelle. <br />
                    Mannequins humains et IA, ressources créatives et direction artistique réunis <br />
                    pour accompagner votre succès.
                </p>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left side - Menu */}
                    <div className="w-full md:w-1/3 flex flex-col gap-4 md:sticky md:top-28 self-start animate-slide-in-left">
                        {mannequinTypes.map((type, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`py-3 px-6 rounded-full font-semibold text-left border border-slate-100 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition focus:outline-none ${activeIndex === index
                                    ? "bg-rose-950 hover:shadow-lg text-white"
                                    : "bg-transparent text-slate-900"
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>

                    {/* Right side - Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden mannequin-card hover:shadow-lg transition-shadow">
                            <img src="https://picsum.photos/400/400?random=1" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden mannequin-card hover:shadow-lg transition-shadow">
                            <img src="https://picsum.photos/400/400?random=2" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden mannequin-card hover:shadow-lg transition-shadow">
                            <img src="https://picsum.photos/400/400?random=3" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden mannequin-card hover:shadow-lg transition-shadow">
                            <img src="https://picsum.photos/400/400?random=4" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden mannequin-card hover:shadow-lg transition-shadow">
                            <img src="https://picsum.photos/400/400?random=5" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden mannequin-card hover:shadow-lg transition-shadow">
                            <img src="https://picsum.photos/400/400?random=6" alt="Model" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}