import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function PricingCard({ type, isPopular = false }) {
    const scrollRef = useScrollAnimation();

    if (type === "standard") {
        return (
            <div className="bg-rose-950 text-white rounded-3xl p-8 shadow-xl relative flex flex-col pricing-card standard hover:shadow-2xl transition-shadow animate-scroll" ref={scrollRef}>

                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <p className="text-rose-200 text-sm mb-6">Découvrez le Maquinat 2.0 !</p>

                <div className="mb-6">
                    <span className="text-5xl font-bold">89,99€</span>
                    <p className="text-rose-200 text-sm mt-2">
                        Par utilisateur / facturé annuellement
                    </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">100 générations</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Pause et annulation à tout moment</span>
                    </li>
                </ul>

                <button className="w-full bg-rose-950 text-white font-semibold py-3 rounded-lg hover:bg-rose-900 transition" aria-label="Commencer avec le forfait Standard">
                    Se lancer
                </button>
            </div>
        );
    }

    if (type === "custom") {
        return (
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-lg flex flex-col pricing-card custom hover:shadow-xl transition-shadow animate-scroll" ref={scrollRef}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Sur mesure</h3>
                <p className="text-slate-600 text-sm mb-6">Découvrez le Maquinat 2.0 !</p>

                <div className="mb-6">
                    <h4 className="text-4xl font-bold text-slate-900 mb-2">Parlons-en</h4>
                    <p className="text-slate-600 text-sm">
                        Contactez nous pour plus de détails
                    </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-rose-950 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-700">All features from the Team package</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-rose-950 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-700">Deeper integration and API customization</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-rose-950 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-700">Unlimited revision & request</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-rose-950 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-700">Unlimited users</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-rose-950 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-700">Pause et annulation à tout moment</span>
                    </li>
                </ul>

                <button className="w-full bg-rose-950 text-white font-semibold py-3 rounded-lg hover:bg-rose-900 transition" aria-label="Contacter les commerciaux pour un forfait surpuissant\">
                    Contactez nos commerciaux
                </button>
            </div>
        );
    }
}
