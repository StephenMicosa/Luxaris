import heroBg from "../../assets/Hero.png";
import heroSm from "../../assets/Hero-sm.jpg";
import heroMd from "../../assets/Hero-md.jpg";
import heroLg from "../../assets/Hero-lg.jpg";
import heroSmWebp from "../../assets/Hero-sm.webp";
import heroMdWebp from "../../assets/Hero-md.webp";
import heroLgWebp from "../../assets/Hero-lg.webp";
import OptimizedHeroImage from "../common/OptimizedHeroImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 opacity-30 bg-black/40">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-lg p-14 bg-transparent">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4A001A] mb-8 leading-tight">
            Une nouvelle vision du <br />
            mannequinat, sans <br />
            limites.
          </h1>

          <p className="text-base md:text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            L&apos;élégance humaine, amplifiée par l&apos;intelligence artificielle <br />
            Une nouvelle géneration de mannequins au service de la creativité et de la performance des marques
          </p>

          {/* Bouton CTA (contact uniquement) */}
          <div className="flex justify-center items-center">
            <a
              href="/contact"
              className="px-10 py-3 bg-white border border-slate-300 rounded-xl font-semibold text-[#4A001A] text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              Contactez nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
