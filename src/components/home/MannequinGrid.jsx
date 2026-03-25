import { useState } from "react";
import { mannequinsData } from "../../data/mannequinsData";

export default function MannequinGrid() {
    const items = mannequinsData.slice(0, 9);
    const [activeIndex, setActiveIndex] = useState(0);

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const goPrev = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const cardClass = "bg-white border border-slate-200 rounded-3xl w-602h-80-sm:w-65-sm:h-90-lg:w-70-[400px] overflow-hidden shadow-sm mannequin-card hover:shadow-lg transition-shadow p-0 opacity-100";

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="md:hidden">
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {items.map((mannequin) => (
                                <div key={mannequin.id} className="w-full shrink-0 px-2">
                                    <div className={cardClass}>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={mannequin.src}
                                                alt={mannequin.alt}
                                                width={400}
                                                height={400}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Image precedente"
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 border border-slate-200 rounded-full w-9 h-9 flex items-center justify-center shadow"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={goNext}
                        aria-label="Image suivante"
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 border border-slate-200 rounded-full w-9 h-9 flex items-center justify-center shadow"
                    >
                        ›
                    </button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Aller a l'image ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-6 bg-rose-950" : "w-2.5 bg-slate-300"}`}
                        />
                    ))}
                </div>
            </div>

            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {items.map((mannequin) => (
                    <div key={mannequin.id} className={cardClass}>
                        <div className="w-full h-full flex items-center justify-center">
                            <img
                                src={mannequin.src}
                                alt={mannequin.alt}
                                width={400}
                                height={400}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
