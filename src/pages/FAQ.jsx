export default function FAQ() {
  return (
    <main className="bg-white">
      <section className="w-full bg-slate-50 py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#4A001A]">FAQ</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#4A001A]">
            Comment pouvons-nous vous aider ?
          </h1>

          <div className="mt-8">
            <input
              type="text"
              placeholder="Search..."
              className="mx-auto w-full max-w-md rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-300"
            />
          </div>

          <div className="mt-10 space-y-4 text-left">
            <details className="rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Qu’est-ce que Luxaris et comment ça fonctionne ?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Luxaris combine direction artistique et production visuelle (humains & IA) pour créer des visuels cohérents, premium et rapides.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Serai-je facturé(e) pour la taxe ?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                La taxe dépend de votre localisation et du cadre légal applicable.
              </p>
            </details>

            <details className="rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">
                Comment fonctionnent les remboursements ?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Les remboursements suivent les conditions prévues au contrat selon la prestation.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
