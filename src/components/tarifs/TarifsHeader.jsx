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

export default function TarifsHeader() {
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
            </div>
        </>
    );
}
