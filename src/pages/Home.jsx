import { Helmet } from 'react-helmet-async';
import Hero from "../components/home/Hero.jsx";
import Mannequins from "../components/home/Mannequins.jsx";
import Clients from "../components/home/Clients.jsx";

export default function Home() {
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
            <Mannequins />
            <Clients />
        </>
    );
}
