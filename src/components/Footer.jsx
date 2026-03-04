import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
            {/* Red Banner Section */}
            <div className="w-full bg-linear-to-b from-[#4A001A] to-rose-900 py-16 px-4 footer-banner">
                <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Une nouvelle vision du mannequinat, sans limites.
                    </h2>
                    <p className="text-lg text-rose-100 max-w-2xl">
                        Rejoignez nos partenaires et clients qui connaissent déjà la croissance avec Luxaris
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-rose-950 transition">
                            Contactez nous
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-white border-t border-slate-200 animate-scroll" ref={scrollRef}>
                {/* Main Footer Content */}
                <div className="mx-auto max-w-6xl px-4 py-12 footer-content">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="Luxaris" className="h-8 w-auto" />
                        </div>

                        {/* Column 1 */}
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                Accueil
                            </a>
                            <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                À propos
                            </a>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                Tarifs
                            </a>
                            <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                Contact
                            </a>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                FAQ
                            </a>
                            <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                                Politique de confidentialité
                            </a>
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
