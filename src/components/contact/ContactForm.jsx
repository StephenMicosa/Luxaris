import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const formulas = [
  "Mannequin réel",
  "Mannequin IA",
];

const formStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .form-input {
    animation: slideInUp 0.6s ease-out forwards;
    opacity: 0;
  }
`;

export default function ContactForm() {
  const scrollRef = useScrollAnimation();

  return (
    <>
      <style>{formStyles}</style>
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow p-8 text-left animate-scroll"
        ref={scrollRef}
      >
        <h2 className="text-2xl font-semibold text-center text-[#4A001A] mb-6">
          Choisir un mannequin
        </h2>

        <form className="space-y-4">
          <div className="form-input" style={{ animationDelay: "0.3s" }}>
            <label className="text-sm text-slate-600">Nom</label>
            <input
              type="text"
              placeholder="Nom"
              className="w-full rounded-lg border px-4 py-2"
              required
            />
          </div>

          <div className="form-input" style={{ animationDelay: "0.4s" }}>
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              placeholder="email@exemple.com"
              className="w-full rounded-lg border px-4 py-2"
              required
            />
          </div>

          <div className="form-input" style={{ animationDelay: "0.5s" }}>
            <label className="text-sm text-slate-600">Numéro de téléphone</label>
            <input
              type="tel"
              placeholder="+33 6 00 00 00 00"
              className="w-full rounded-lg border px-4 py-2"
            />
          </div>

          <div className="form-input" style={{ animationDelay: "0.6s" }}>
            <label className="text-sm text-slate-600">Entreprise</label>
            <input
              type="text"
              placeholder="Entreprise"
              className="w-full rounded-lg border px-4 py-2"
            />
          </div>

          <div className="form-input" style={{ animationDelay: "0.7s" }}>
            <label className="text-sm text-slate-600">Type de mannequin</label>
            <select className="w-full rounded-lg border px-4 py-2">
              <option value="">Choisissez un type</option>
              {formulas.map((formula) => (
                <option key={formula}>{formula}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="form-input w-full mt-4 bg-[#4A001A] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            style={{ animationDelay: "0.9s" }}
          >
            Sélectionner votre mannequin
          </button>
        </form>
      </div>
    </>
  );
}
