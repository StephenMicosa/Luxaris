import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Luxaris" className="h-8 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <Link to="/about" className="hover:text-black transition">
            À propos
          </Link>
          <Link to="/pricing" className="hover:text-black transition">
            Tarifs
          </Link>
          <Link to="/faq" className="hover:text-black transition">
            FAQ
          </Link>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="cursor-pointer bg-[#4A001A] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
        >
          Contactez-nous
        </Link>
      </div>
    </header>
  );
}
