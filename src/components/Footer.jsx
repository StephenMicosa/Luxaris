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

                    {/* Footer Bottom */}
                    <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between">
                        <p className="text-xs text-slate-600 mb-4 md:mb-0">
                            © 2026 Luxaris. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-slate-600 hover:text-slate-900 transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="#" className="text-slate-600 hover:text-slate-900 transition">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}