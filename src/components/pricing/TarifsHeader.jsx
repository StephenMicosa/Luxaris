import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function TarifsHeader() {
  const scrollRef = useScrollAnimation();
  return (
    <div className="text-center mb-12 animate-fade-in-up animate-scroll" ref={scrollRef}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A001A] mb-6">
        Tarification simple et flexible
      </h1>
      <p className="text-base text-slate-600 mb-8 md:text-lg">
        Des plans tarifaires pour les entreprises à chaque étape de leur croissance
      </p>
    </div>
  );
}
