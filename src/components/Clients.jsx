const testimonials = [
    {
        name: "Charolette Hannin",
        role: "Co-fondatrice, Heroes Digital",
        text: "Une approche totalement nouvelle du mannequinat. Les profils IA sont bluffants et s'intègrent parfaitement à nos campagnes. Gain de temps énorme et rendu premium.",
        rating: 4.8,
        avatar: "https://i.pravatar.cc/80?img=36",
    },
    {
        name: "Novak Balázs",
        role: "Co-fondateur, WeCommerce",
        text: "L'agence a compris nos enjeux dès le départ. Flexibilité, créativité et exécution rapide. Le mix humain / IA change clairement la donne.",
        rating: 4.8,
        avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
        name: "Orosz Boldizsár",
        role: "Fondateur, Okta",
        text: "Une solution idéale pour produire des visuels cohérents à grande échelle. L'équipe est réactive et la direction artistique très pointue.",
        rating: 4.8,
        avatar: "https://i.pravatar.cc/80?img=25",
    },
    {
        name: "Floyd Miles",
        role: "Co-fondateur, Stack",
        text: "Nous avons pu tester plusieurs concepts sans contraintes de casting classique. Résultat : plus d'audace créative et un budget maîtrisé.",
        rating: 4.8,
        avatar: "https://i.pravatar.cc/80?img=18",
    },
    {
        name: "Darrell Steward",
        role: "DA, freelance",
        text: "Une agence visionnaire. Les mannequins IA sont réalistes, élégants et parfaitement alignés avec l'ADN de notre marque.",
        rating: 4.8,
        avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
        name: "Devon Lane",
        role: "Marketing, Booste",
        text: "Production rapide, qualité constante et process fluide. C'est devenu un partenaire clé pour nos campagnes internationales.",
        rating: 4.8,
        avatar: "https://i.pravatar.cc/80?img=47",
    },
];

function Stars({ value }) {
    return (
        <div className="flex items-center gap-1 text-amber-500 text-sm" aria-label={`${value} étoiles`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
            ))}
            <span className="ml-2 text-slate-500 text-sm">{value}</span>
        </div>
    );
}

function TestimonialCard({ item }) {
    return (
        <article className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 flex flex-col gap-4">
            <Stars value={item.rating} />
            <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
                    <img src={item.avatar} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="leading-tight">
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                </div>
            </div>
        </article>
    );
}

export default function Clients() {
    return (
        <section className="w-full bg-[#fbf8fb] py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                <div className="text-center space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-900">Nos clients</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-rose-950 leading-tight">
                        Découvrez ce que disent <br className="hidden md:block" /> nos clients
                    </h2>
                </div>

                {/* Desktop grid */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.name} item={item} />
                    ))}
                </div>

                {/* Mobile vertical carousel */}
                <div className="md:hidden max-h-130 overflow-y-auto snap-y snap-mandatory pr-1 flex flex-col gap-4">
                    {testimonials.map((item) => (
                        <div key={item.name} className="snap-start">
                            <TestimonialCard item={item} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="px-5 py-2 rounded-full bg-rose-950 text-white font-semibold text-sm shadow hover:bg-rose-900 transition">
                        Tous les témoignages
                    </button>
                </div>
            </div>
        </section>
    );
}
