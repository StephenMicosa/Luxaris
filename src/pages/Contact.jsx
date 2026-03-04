export default function Contact() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-slate-50">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A001A] mb-6">
          Parlons-en
        </h1>
        <p className="max-w-2xl text-slate-600 mb-12">
          Rejoignez-nous pour explorer des solutions sur mesure, discuter des
          tendances du secteur et collaborer afin de trouver les meilleures
          stratégies pour votre réussite.
        </p>

        {/* FORM */}
        <div className="w-full max-w-xl bg-white rounded-2xl shadow p-8 text-left">
          <h2 className="text-2xl font-semibold text-center text-[#4A001A] mb-6">
            Parlez-nous
          </h2>

          <form className="space-y-4">
            {/* NOM */}
            <div>
              <label className="text-sm text-slate-600">Nom</label>
              <input
                type="text"
                placeholder="Nom"
                className="w-full rounded-lg border px-4 py-2"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input
                type="email"
                placeholder="email@exemple.com"
                className="w-full rounded-lg border px-4 py-2"
                required
              />
            </div>

            {/* TELEPHONE */}
            <div>
              <label className="text-sm text-slate-600">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                placeholder="+33 6 00 00 00 00"
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>

            {/* ENTREPRISE */}
            <div>
              <label className="text-sm text-slate-600">Entreprise</label>
              <input
                type="text"
                placeholder="Entreprise"
                className="w-full rounded-lg border px-4 py-2"
              />
            </div>

            {/* FORMULE */}
            <div>
              <label className="text-sm text-slate-600">Formule</label>
              <select className="w-full rounded-lg border px-4 py-2">
                <option value="">Choisissez une formule</option>
                <option>Mannequin réel – Demi-journée</option>
                <option>Mannequin réel – Journée complète</option>
                <option>Pack IA – Signature</option>
                <option>Photos supplémentaires</option>
                <option>Vidéo IA</option>
                <option>Exclusivité mannequin IA</option>
                <option>Autre / Sur mesure</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-slate-600">Message</label>
              <textarea
                rows="4"
                placeholder="Expliquez-nous votre besoin..."
                className="w-full rounded-lg border px-4 py-2"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full mt-4 bg-[#4A001A] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Recevoir un devis
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
