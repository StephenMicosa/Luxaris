import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      {/* ✅ BANNIÈRE ROUGE (CTA) */}
      <section className="w-full bg-[#5a0f23] py-16 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Une nouvelle vision du mannequinat, sans limites.
          </h2>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Rejoignez nos partenaires et clients qui connaissent déjà la croissance avec Luxaris.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-[#5a0f23] shadow-sm hover:bg-white/90 transition cursor-pointer"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ FOOTER BLANC */}
      <footer className="w-full bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-12">
          {/* Ligne du haut : logo + liens centrés + icônes */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Luxaris" className="h-10 w-auto" />
            </div>

            {/* Liens centrés */}
            <nav className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-700">
              <Link className="hover:text-slate-900 transition cursor-pointer" to="/">
                Accueil
              </Link>
              <Link className="hover:text-slate-900 transition cursor-pointer" to="/about">
                À propos
              </Link>
              <Link className="hover:text-slate-900 transition cursor-pointer" to="/pricing">
                Tarifs
              </Link>
              <Link className="hover:text-slate-900 transition cursor-pointer" to="/faq">
                FAQ
              </Link>
              <Link className="hover:text-slate-900 transition cursor-pointer" to="/privacy">
                Politique de confidentialité
              </Link>
            </nav>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a href="#" className="cursor-pointer text-slate-600 hover:text-slate-900 transition" aria-label="LinkedIn">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452H17.2v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.064V9h3.112v1.561h.045c.434-.823 1.494-1.689 3.073-1.689 3.287 0 3.894 2.164 3.894 4.977v6.603zM5.337 7.433a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM6.87 20.452H3.803V9H6.87v11.452z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="cursor-pointer text-slate-600 hover:text-slate-900 transition" aria-label="Instagram">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.9a1.1 1.1 0 10.001 2.201A1.1 1.1 0 0017.5 8.1z" />
                </svg>
              </a>

              {/* TikTok */}
              <a href="#" className="cursor-pointer text-slate-600 hover:text-slate-900 transition" aria-label="TikTok">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3c.6 3.4 2.9 5.5 5.5 5.7v3.1c-1.9.1-3.7-.6-5.5-1.7v6.3c0 3.8-3.1 6.6-6.8 6.1-2.1-.3-3.9-1.7-4.8-3.7-1.7-3.8 1.2-8.1 5.4-8.1.4 0 .8.1 1.1.2v3.4c-.3-.1-.7-.2-1.1-.2-1.8 0-3.2 1.7-2.8 3.6.3 1.2 1.3 2.2 2.6 2.3 1.8.2 3.3-1.2 3.3-3V3h3.1z" />
                </svg>
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
