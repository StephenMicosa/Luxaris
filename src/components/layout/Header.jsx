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

    const toggleMenu = () => setOpen((prev) => !prev);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header className="relative z-50 w-full border-b py-3 bg-white/95">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
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

                    <nav className="hidden items-center justify-end gap-12 text-sm md:text-md text-slate-500 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="transition-colors hover:text-slate-900"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden items-center md:flex">
                        <Link
                            to="/contact-footer"
                            className="rounded-lg border border-[#4A001A] bg-[#4A001A] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            Contactez-nous
                        </Link>
                    </div>

                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-800 shadow-sm transition hover:border-slate-400 md:hidden"
                        onClick={toggleMenu}
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={open}
                    >
                        <span className="sr-only">{open ? "Fermer" : "Menu"}</span>
                        {open ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <div className="space-y-1.5">
                                <span className="block h-0.5 w-6 bg-slate-800"></span>
                                <span className="block h-0.5 w-6 bg-slate-800"></span>
                                <span className="block h-0.5 w-6 bg-slate-800"></span>
                            </div>
                        )}
                    </button>
                </div>

                {/* Menu déroulant mobile (sous l'en-têt) */}

                <div
                    className={`absolute left-0 right-0 top-full z-50 md:hidden overflow-hidden bg-transparent border-t transition-all duration-300 ease-out ${open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <div className="px-6 py-5 text-right md:text-left">
                        <nav className="flex flex-col items-end md:items-start gap-5 text-base text-slate-900">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="transition-colors hover:text-slate-600 text-right md:text-left"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-6 flex justify-end md:justify-start">
                            <Link
                                to="/contact"
                                className="inline-block rounded-lg bg-rose-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-900"
                                onClick={() => setOpen(false)}
                            >
                                Contactez-nous
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            {open &&
                createPortal(
                    <div
                        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
                        onClick={() => setOpen(false)}
                    ></div>,
                    document.body
                )}
        </>
    );
}
