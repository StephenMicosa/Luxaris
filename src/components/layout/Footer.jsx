import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import LazyImage from "../common/LazyImage";
import logo from "../../assets/logo.png";
import logoWebp from "../../assets/logo-converted-from-png.webp";
import logoMd from "../../assets/logo-md.jpg";
import logoMdWebp from "../../assets/logo-md.webp";

const footerStyles = `
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
  
  .footer-banner {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .footer-content {
    animation: fadeInUp 0.8s ease-out 0.2s forwards;
    opacity: 0;
  }
`;

export default function Footer() {
    const scrollRef = useScrollAnimation();

    return (
        <>
            <style>{footerStyles}</style>
            {/* Section bannière rouge */}
            <div className="w-full bg-linear-to-b from-[#4A001A] to-rose-900 py-16 px-4 footer-banner">
                <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Une nouvelle vision du mannequinat, sans limites.
                    </h2>
                    <p className="text-lg text-rose-100 max-w-2xl">
                        Rejoignez nos partenaires et clients qui connaissent déjà la croissance avec Luxaris
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link to="/contact" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-rose-950 transition">
                            Contactez nous
                        </Link>
                    </div>
                </div>
            </div>

            {/* Pied de page */}
            <footer className="w-full bg-white border-t border-slate-200 animate-scroll" ref={scrollRef}>
                {/* Contenu principal du pied de page */}
                <div className="mx-auto max-w-6xl px-4 py-12 footer-content">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <LazyImage
                                src={logo}
                                srcWebp={logoWebp}
                                srcMd={logoMd}
                                srcMdWebp={logoMdWebp}
                                alt="Luxaris"
                                width={80}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </div>

                        {/* Colonne 1 */}
                        <div className="flex flex-col gap-4">
                            <Link to="/" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                Accueil
                            </Link>
                            <Link to="/about" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                À propos
                            </Link>
                        </div>

                        {/* Colonne 2 */}
                        <div className="flex flex-col gap-4">
                            <Link to="/pricing" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                Tarifs
                            </Link>
                            <Link to="/contact" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                Contact
                            </Link>
                        </div>

                        {/* Colonne 3 */}
                        <div className="flex flex-col gap-4">
                            <Link to="/faq" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                FAQ
                            </Link>
                            <Link to="/privacy" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                Politique de confidentialité
                            </Link>
                        </div>
                    </div>

                    {/* Ligne de séparation */}
                    <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-600">
                        © 2026 Luxaris. Tous droits réservés.
                    </div>
                </div>
            </footer>
        </>
    );
}
