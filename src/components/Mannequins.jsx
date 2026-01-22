export default function Mannequins() {
    const mannequinTypes = [
        { label: "Mannequin défilé", isActive: true },
        { label: "Mannequin publicité", isActive: false },
        { label: "Mannequin Fitness", isActive: false },
        { label: "Mannequin cabine", isActive: false },
    ];

    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Tout-en-un : votre mannequin <br />
                    virtuel prêt à l&apos;emploi
                </h2>

                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                    Une plateforme unique pour orchestrer votre présence visuelle. <br />
                    Mannequins humains et IA, ressources créatives et direction artistique réunis <br />
                    pour accompagner votre succès.
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Left side - Menu */}
                    <div className="w-full md:w-1/3 flex flex-col gap-3">
                        {mannequinTypes.map((type, index) => (
                            <button
                                key={index}
                                className={`py-3 px-6 rounded-full font-semibold text-left transition ${type.isActive
                                        ? "bg-[#4A001A] text-white"
                                        : "bg-transparent text-slate-900 border border-slate-200"
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>

                    {/* Right side - Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                        <div className="bg-slate-200 rounded-2xl h-48 md:h-56"></div>
                        <div className="bg-slate-200 rounded-2xl h-48 md:h-56"></div>
                        <div className="bg-slate-200 rounded-2xl h-48 md:h-56"></div>
                        <div className="bg-slate-200 rounded-2xl h-48 md:h-56"></div>
                        <div className="bg-slate-200 rounded-2xl h-48 md:h-56 col-span-2 md:col-span-1"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}