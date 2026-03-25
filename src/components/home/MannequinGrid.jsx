import LazyImage from "../common/LazyImage";

export default function MannequinGrid() {
    return (
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="bg-slate-300 rounded-3xl h-64 overflow-hidden mannequin-card hover:shadow-lg transition-shadow">
                    <LazyImage src={`https://picsum.photos/400/400?random=${num}`} alt="Model" width={400} height={400} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    );
}
