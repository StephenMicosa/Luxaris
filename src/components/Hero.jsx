import heroBg from "../assets/Hero.png";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30 bg-black/40">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
                {/* Border box decoration */}
                <div className="rounded-lg p-12 bg-transparent">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Une nouvelle vision du <br />
                        mannequinat, sans <br />
                        limites.
                    </h1>

                    <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        L'élégance humaine, amplifiée par l'intelligence artificielle <br />
                        Une nouvelle géneration de mannequins au service de la creativité et de la performance des marques
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-2 bg-white border border-slate-300 rounded-lg font-semibold text-[#4A001A] text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5transition">
                            Contactez nous
                        </button>
                        <button className="px-8 py-2 bg-[#4A001A] border border-[#4A001A] rounded-lg font-semibold text-white text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
                            S&apos;inscrire
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


