import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const tarifHeaderStyles = `
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
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
`;

export default function TarifsHeader({ isAnnual, setIsAnnual }) {
    const scrollRef = useScrollAnimation();
    return (
        <>
        <style>{tarifHeaderStyles}</style>
        <div className="text-center mb-12 animate-fade-in-up animate-scroll" ref={scrollRef}>
            <p className="sm:text-sm md:text-xl font-semibold text-[#4A001A] mb-4">Tarifs</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4A001A] mb-6">
                Tarification simple et flexible
            </h1>
            <p className="text-slate-600 text-lg mb-8">
                Des plans tarifaires pour les entreprises à chaque étape de leur croissance
            </p>

            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center gap-4">
                    <span className={`text-sm font-medium ${!isAnnual ? 'text-[#4A001A]' : 'text-slate-500'}`}>
                        Mensuellement
                    </span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAnnual ? 'bg-rose-950' : 'bg-slate-300'
                            }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                    <span className={`text-sm font-medium ${isAnnual ? 'text-[#4A001A]' : 'text-slate-500'}`}>
                        Annuellement
                    </span>
                </div>
                {isAnnual && (
                    <span className="text-sm font-medium text-emerald-600">Économiser 30%</span>
                )}
            </div>
        </div>
        </>
    );
}
