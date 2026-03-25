import { Helmet } from 'react-helmet-async';
import HeroSection from "../components/sections/HeroSection";
import TeamSection from "../components/about/TeamSection";

export default function About() {
  const team = [
    { name: "Rania", role: "Chef de projet" },
    { name: "Lisa", role: "Communication & Marketing" },
    { name: "Clément", role: "Directeur Artistique" },
    { name: "Manon", role: "Communication & Marketing" },
    { name: "Ilona", role: "Communication & Marketing" },
    { name: "Stephen", role: "Développeur Web" },
    { name: "Walid", role: "Développeur Web" },
    { name: "Ayoub", role: "Administrateur d'infrastructures" },
    { name: "Damien", role: "Développement IA & Data Engineering" },
  ];

  return (
    <>
      <Helmet>
        <title>À Propos de Luxaris | Équipe & Mission du Mannequinat</title>
        <meta name="description" content="Découvrez l'équipe et la mission de Luxaris. Notre vision est de révolutionner le secteur du mannequinat avec des solutions innovantes et une plateforme sans limites." />
        <meta name="keywords" content="Luxaris équipe, mission mannequinat, agence de mannequins, startups mode, innovation mannequinat" />
        <meta property="og:title" content="À Propos de Luxaris" />
        <meta property="og:description" content="Découvrez l'équipe talentueuse derrière Luxaris et notre vision pour le mannequinat." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxaris.com/about" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://luxaris.com/about" />
      </Helmet>

      <main className="bg-white">
        <HeroSection
          label="À PROPOS DE NOUS"
          title="Découvrez Luxaris"
          description={
            <>
              Un accès privilégié pour explorer l'univers de Luxaris
              <br />
              et toutes nos solutions sur mesure.
            </>
          }
          hasBackground={true}
        />

        <TeamSection team={team} />
      </main>
    </>
  );
}
