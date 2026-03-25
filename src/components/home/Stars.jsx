export default function Stars({ value }) {
    return (
        <div className="flex items-center gap-1 text-amber-500 text-sm" aria-label={`${value} étoiles`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
            ))}
            <span className="ml-2 text-slate-500 text-sm">{value}</span>
        </div>
    );
}
