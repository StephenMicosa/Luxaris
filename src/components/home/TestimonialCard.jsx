export default function TestimonialCard({ item }) {
    return (
        <div className="group relative w-full rounded-[2rem] bg-transparent transition duration-300 hover:-translate-y-1 testimonial-card">
            <div className="relative min-h-[21rem] overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-rose-50/95 via-white/95 to-amber-50/90 p-6 shadow-[0_14px_32px_rgba(52,15,30,0.10)] transition duration-300 hover:shadow-[0_20px_44px_rgba(52,15,30,0.14)]">
                <div className="relative flex h-full flex-col gap-4">
                    <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-rose-900/70">
                        <span>{item.label}</span>
                        <span className="text-3xl leading-none text-rose-200">&ldquo;</span>
                    </div>
                    <p className="text-[1.05rem] leading-8 text-slate-800">{item.text}</p>
                    <div className="mt-auto pt-3 border-t border-rose-100/80 flex items-center justify-between gap-3">
                        <div>
                            <p className="text-sm font-semibold text-slate-950">{item.name}</p>
                            <p className="text-xs text-slate-500">{item.role}</p>
                        </div>
                        <span className="rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-900">
                            Luxaris
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
