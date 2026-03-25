import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import OptimizedHeroImage from "../common/OptimizedHeroImage";
import heroBg from "../../assets/Hero.png";
import heroSm from "../../assets/Hero-sm.jpg";
import heroMd from "../../assets/Hero-md.jpg";
import heroLg from "../../assets/Hero-lg.jpg";
import heroSmWebp from "../../assets/Hero-sm.webp";
import heroMdWebp from "../../assets/Hero-md.webp";
import heroLgWebp from "../../assets/Hero-lg.webp";

const heroStyles = `
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
  
    .hero-animate { opacity: 0; }
    .hero-animate-1 { opacity: 0; }
    .hero-animate-2 { opacity: 0; }

    .animate-scroll .hero-animate {
        animation: fadeInUp 0.8s ease-out forwards;
    }

    .animate-scroll .hero-animate-1 {
        animation: fadeInUp 0.8s ease-out 0.2s forwards;
    }

    .animate-scroll .hero-animate-2 {
        animation: fadeInUp 0.8s ease-out 0.4s forwards;
    }
`;

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const scrollRef = useScrollAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <style>{heroStyles}</style>
            <section
                ref={scrollRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-24"
            >
                <OptimizedHeroImage
                    src={heroSm}
                    srcWebp={heroSmWebp}
                    srcMd={heroMd}
                    srcMdWebp={heroMdWebp}
                    srcLg={heroLg}
                    srcLgWebp={heroLgWebp}
                    alt="Luxaris Hero Banner"
                    className="absolute inset-0 w-full h-full"
                />
                {/* Décoration de fond */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
                </div>

                {/* Contenu avec zoom out au scroll */}
                <div
                    className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center md:px-6"
                    style={{
                        transform: `translateY(${-scrollY * 0.5}px) scale(${Math.max(0.8, 1 - scrollY * 0.0005)})`,
                        transformOrigin: 'center center'
                    }}
                >
                    {/* Décoration boîte de bordure */}
                    <div className="rounded-lg p-8 bg-transparent md:p-14">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#4A001A] mb-6 md:mb-8 leading-tight hero-animate">
                            Une nouvelle vision du <br />
                            mannequinat, sans <br />
                            limites.
                        </h1>

                        <p className="text-sm md:text-lg text-slate-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed hero-animate-1">
                            L'élégance humaine, amplifiée par l'intelligence artificielle <br />
                            Une nouvelle géneration de mannequins au service de la creativité et de la performance des marques
                        </p>

                        {/* Boutons CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center hero-animate-2">
                            <Link to="/contact" className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-300 rounded-xl font-semibold text-[#4A001A] text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition inline-block text-center">
                                Contactez nous
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


