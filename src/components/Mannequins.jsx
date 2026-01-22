import { useState } from "react";

export default function Mannequins() {
    const [activeIndex, setActiveIndex] = useState(0);

    const mannequinTypes = [
        { label: "Mannequin défilé" },
        { label: "Mannequin publicité" },
        { label: "Mannequin Fitness" },
        { label: "Mannequin cabine" },
    ];

    return (
        <section className="min-h-screen w-full bg-white py-20 px-4">
            <div className="mx-auto max-w-6xl w-full">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-[#4A001A] mb-4">
                    Tout-en-un : votre mannequin <br />
                    virtuel prêt à l&apos;emploi
                </h2>

                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                    Une plateforme unique pour orchestrer votre présence visuelle. <br />
                    Mannequins humains et IA, ressources créatives et direction artistique réunis <br />
                    pour accompagner votre succès.
                </p>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left side - Menu */}
                    <div className="w-full md:w-1/3 flex flex-col gap-4 md:sticky md:top-28 self-start">
                        {mannequinTypes.map((type, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`py-3 px-6 rounded-full font-semibold text-left transition focus:outline-none ${activeIndex === index
                                    ? "bg-rose-950 text-white"
                                    : "bg-transparent text-slate-900"
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>

                    {/* Right side - Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-2 gap-6">
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden">
                            <img src="https://picsum.photos/400/400?random=1" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden">
                            <img src="https://picsum.photos/400/400?random=2" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden">
                            <img src="https://picsum.photos/400/400?random=3" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden">
                            <img src="https://picsum.photos/400/400?random=4" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden">
                            <img src="https://picsum.photos/400/400?random=5" alt="Model" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-slate-300 rounded-3xl h-64 overflow-hidden">
                            <img src="https://picsum.photos/400/400?random=6" alt="Model" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}