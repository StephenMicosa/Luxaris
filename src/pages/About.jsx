import { Helmet } from "react-helmet-async";
import HeroSection from "../components/sections/HeroSection";
import TeamSection from "../components/about/TeamSection";

export default function About() {
  const team = [
    { name: "Rania", role: "Chef de projet" },
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
        <meta
          name="description"
          content="Découvrez l'équipe et la mission de Luxaris. Notre vision est de révolutionner le secteur du mannequinat avec des solutions innovantes et une plateforme sans limites."
        />
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

        <section className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#4A001A] uppercase mb-3">
            LE CONCEPT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A001A] mb-6">
            Une plateforme pensée pour les marques
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Luxaris est un concept hybride qui combine mannequins réels,
            mannequins IA et direction artistique pour permettre aux marques de
            produire plus rapidement des contenus visuels cohérents, modernes et
            adaptés à leurs objectifs de communication, de vente et d’image.
          </p>
        </section>

        <TeamSection team={team} />
      </main>
    </>
  );
}
