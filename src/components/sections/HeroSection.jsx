import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const heroAnimationStyles = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
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
  
  .hero-label {
    animation: fadeInDown 0.8s ease-out forwards;
  }
  
  .hero-title {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }
  
  .hero-description {
    animation: fadeInUp 0.8s ease-out 0.4s forwards;
    opacity: 0;
  }
`;

export default function HeroSection({
    label,
    title,
    description,
    hasBackground = true
}) {
    const scrollRef = useScrollAnimation();

    return (
        <>
            <style>{heroAnimationStyles}</style>
            <section className="relative min-h-130 flex items-center justify-center overflow-hidden animate-scroll" ref={scrollRef} style={{ backgroundColor: hasBackground ? '#fbf8fb' : '#f8fafc' }}>
                {hasBackground && (
                    <div className="absolute inset-0 opacity-40">
                        {/* Grille légère */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                        {/* Glow */}
                        <div className="absolute top-24 left-1/4 w-96 h-96 bg-rose-200 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
                    </div>
                )}

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    {label && (
                        <p className="text-xs font-semibold tracking-widest text-[#4A001A] uppercase mb-4 hero-label">
                            {label}
                        </p>
                    )}

                    <h1 className="text-4xl md:text-6xl font-bold text-[#4A001A] leading-tight hero-title">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto hero-description">
                            {description}
                        </p>
                    )}
                </div>
            </section>
        </>
    );
}
