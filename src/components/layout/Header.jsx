import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import logoWebp from "../../assets/logo-converted-from-png.webp";
import logoMd from "../../assets/logo-md.jpg";
import logoMdWebp from "../../assets/logo-md.webp";

const navLinks = [
    { label: "À propos", path: "/about" },
    { label: "Tarifs", path: "/pricing" },
    { label: "FAQ", path: "/faq" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setOpen((prev) => !prev);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${scrolled
                ? "bg-white/95 border-gray-200 py-3"
                : "bg-transparent border-transparent py-6"
                }`}>
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

                    {/* Left: hamburger button (always visible) */}
                    <button
                        className="flex items-center gap-2 text-slate-800"
                        onClick={toggleMenu}
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={open}
                    >
                        <div className="space-y-1.5">
                            <span className="block h-0.5 w-6 bg-slate-800"></span>
                            <span className="block h-0.5 w-6 bg-slate-800"></span>
                            <span className="block h-0.5 w-6 bg-slate-800"></span>
                        </div>
                        <span className="text-xs font-semibold tracking-widest uppercase hidden md:inline">Menu</span>
                    </button>

                    {/* Center: Logo absolutely centered */}
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <Link to="/" className="flex items-center">
                            <picture className="contents">
                                <source
                                    srcSet={`${logoWebp} 80w, ${logoMdWebp} 160w`}
                                    type="image/webp"
                                    sizes="80px"
                                />
                                <source
                                    srcSet={`${logo} 80w, ${logoMd} 160w`}
                                    sizes="80px"
                                />
                                <img
                                    src={logoWebp || logo}
                                    alt="Luxaris Logo"
                                    width={80}
                                    height={32}
                                    loading="eager"
                                    fetchPriority="high"
                                    decoding="sync"
                                    className="h-8 w-auto"
                                />
                            </picture>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Slide-in drawer from left (all screen sizes) */}
            {createPortal(
                <>
                    {/* Overlay */}
                    <div
                        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                        onClick={() => setOpen(false)}
                    />
                    {/* Drawer */}
                    <div
                        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
                    >
                        {/* Drawer header */}
                        <div className="flex items-center px-6 py-5 border-b">
                            <button
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 text-slate-800"
                                aria-label="Fermer le menu"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="text-xs font-semibold tracking-widest uppercase">Menu</span>
                            </button>
                        </div>

                        {/* Nav links */}
                        <nav className="flex flex-col px-6 py-6 gap-6 text-base text-slate-900">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="transition-colors hover:text-slate-500"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA inside drawer */}
                        <div className="px-6 mt-2">
                            <Link
                                to="/contact"
                                className="inline-block rounded-lg bg-rose-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-900"
                                onClick={() => setOpen(false)}
                            >
                                Contactez-nous
                            </Link>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </>
    );
}