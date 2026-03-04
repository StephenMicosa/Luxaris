export default function About() {
  const team = [
    { name: "Rania", role: "Chef de projet" },
    { name: "Lisa", role: "Communication & Marketing" },
    { name: "Clément", role: "Directeur Artistique" },
    { name: "Manon", role: "Communication & Marketing" },
    { name: "Ilona", role: "Communication & Marketing" },
    { name: "Stephen", role: "Développeur Web" },
    { name: "Walid", role: "Développeur Web" },
    { name: "Ayoub", role: "Administrateur d’infrastructures" },
    { name: "Damien", role: "Développement IA & Data Engineering" },
  ];

  return (
    <main className="bg-white">
      {/* HERO TEXTE AU MILIEU (sans 2ème image en dessous) */}
      <section className="relative min-h-130 flex items-center justify-center overflow-hidden bg-[#fbf8fb]">
        <div className="absolute inset-0 opacity-40">
          {/* Grille légère */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow */}
          <div className="absolute top-24 left-1/4 w-96 h-96 bg-rose-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#4A001A] uppercase mb-4">
            À PROPOS DE NOUS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#4A001A] leading-tight">
            Découvrez Luxaris
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Un accès privilégié pour explorer l’univers de Luxaris
            <br />
            et toutes nos solutions sur mesure.
          </p>
        </div>
      </section>

      {/* NOTRE ÉQUIPE */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-[#4A001A] uppercase">
            NOTRE ÉQUIPE
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#4A001A]">
            Tout est une question de personnes
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m) => (
              <div
                key={m.name}
                className="border border-slate-200 rounded-2xl p-8 shadow-sm bg-white"
              >
                <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-black" />
                <p className="font-semibold text-slate-900">{m.name}</p>
                <p className="text-sm text-slate-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚠️ PAS DE BANDE ROUGE ICI */}
      {/* ⚠️ PAS DE FOOTER ICI */}
    </main>
  );
}
