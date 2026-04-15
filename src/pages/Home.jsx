import { Helmet } from 'react-helmet-async';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Hero from "../components/home/Hero.jsx";
import APIGoogle from "../components/AI-API/API-Google.jsx";

const Mannequins = lazy(() => import("../components/home/Mannequins.jsx"));
const Clients = lazy(() => import("../components/home/Clients.jsx"));

export default function Home() {
    const [showBelowFold, setShowBelowFold] = useState(false);
    const triggerRef = useRef(null);

    useEffect(() => {
        const node = triggerRef.current;
        if (!node || showBelowFold) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowBelowFold(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '300px 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [showBelowFold]);

    return (
        <>
            <Helmet>
                <title>Luxaris - Plateforme de Mannequinat Innovante | Mannequins Réels & IA</title>
                <meta name="description" content="Luxaris est la plateforme leading-edge pour le mannequinat moderne. Découvrez nos solutions avec mannequins réels et créations IA. Joignez-vous à la révolution du mannequinat." />
                <meta name="keywords" content="mannequinat, plateforme mannequins, modèles, agence mannequins, IA mannequins, Luxaris" />
                <meta property="og:title" content="Luxaris - La Nouvelle Vision du Mannequinat" />
                <meta property="og:description" content="Plateforme de mannequinat sans limites avec mannequins réels et créations IA." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://luxaris.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://luxaris.com" />
            </Helmet>

            <Hero />
            <div ref={triggerRef} aria-hidden="true" className="h-px w-full" />

            {showBelowFold && (
                <Suspense fallback={<div className="min-h-60" aria-hidden="true" />}>
                    <Mannequins />
                </Suspense>
            )}
        </>
    );
}
