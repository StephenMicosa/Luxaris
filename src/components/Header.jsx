import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const navLinks = [
    { label: "À propos", path: "/about" },
    { label: "Tarifs", path: "/pricing" },
    { label: "Contact", path: "/contact" },
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
        <header className="w-full border-b py-3 border-dotted border-sky-400 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Luxaris Log" className="h-8 w-auto" />
                    </Link>
                </div>

                <nav className="hidden items-center justify-between gap-12 text-md text-slate-500 md:flex">
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

                <div className="hidden items-center gap-4 md:flex">
                    <button className="rounded-lg border border-slate-300 px-5 py-2 text-xs font-semibold text-[#4A001A] shadow-sm transition hover:-translate-y-0.5 hover:shadow">
                        Se connecter
                    </button>
                    <button className="rounded-lg border border-[#4A001A] bg-[#4A001A] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                        S&apos;inscrire
                    </button>
                </div>

                <button
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-800 shadow-sm transition hover:border-slate-400 md:hidden"
                    onClick={toggleMenu}
                    aria-label="Basculer le menu"
                    aria-expanded={open}
                >
                    <span className="sr-only">Menu</span>
                    <div className="space-y-1.5">
                        <span className="block h-0.5 w-6 bg-slate-800"></span>
                        <span className="block h-0.5 w-6 bg-slate-800"></span>
                        <span className="block h-0.5 w-6 bg-slate-800"></span>
                    </div>
                </button>
            </div>

            {open && (
                <div className="fixed inset-0 z-40 bg-white/85 backdrop-blur-xl md:hidden">
                    <div className="relative mx-auto flex h-full max-w-6xl flex-col px-5 py-4">
                        <button
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-800 shadow-sm transition hover:border-slate-400"
                            onClick={() => setOpen(false)}
                            aria-label="Fermer le menu"
                        >
                            <span className="sr-only">Fermer</span>
                            <span className="text-xl">×</span>
                        </button>

                        <Link to="/" className="mt-12 flex items-center gap-2 self-start" onClick={() => setOpen(false)}>
                            <span className="text-2xl font-semibold text-neutral-900 tracking-tight">Lux</span>
                            <span className="rounded-sm bg-black px-2 py-1 text-lg font-semibold uppercase leading-none text-white">
                                aris.
                            </span>
                        </Link>

                        <div className="mt-10 flex flex-1 flex-col items-end gap-4 text-sm text-slate-700">
                            <nav className="flex flex-col items-end gap-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="transition-colors hover:text-slate-900"
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-2 flex flex-col items-end gap-2">
                                <button className="w-36 rounded-lg border border-[#4A001A] px-6 py-2 text-sm font-semibold text-[#4A001A] shadow-sm transition hover:border-slate-400 hover:shadow">
                                    Se connecter
                                </button>
                                <button className="w-36 rounded-lg border border-[#4A001A] bg-[#4A001A] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                                    S&apos;inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
