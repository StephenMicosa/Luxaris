export default function MannequinMenu({ activeIndex, setActiveIndex, mannequinTypes }) {
    return (
        <div className="w-full md:w-1/3 flex flex-col gap-4 md:sticky md:top-28 self-start animate-slide-in-left">
            {mannequinTypes.map((type, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`py-3 px-6 rounded-full font-semibold text-left border border-slate-100 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition focus:outline-none ${activeIndex === index
                            ? "bg-rose-950 hover:shadow-lg text-white"
                            : "bg-transparent text-slate-900"
                        }`}
                >
                    {type.label}
                </button>
            ))}
        </div>
    );
}
