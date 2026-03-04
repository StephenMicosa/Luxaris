import Stars from "./Stars";

export default function TestimonialCard({ item }) {
    return (
        <article className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow testimonial-card">
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
