import HeroSection from "../components/HeroSection";
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
  );
}
