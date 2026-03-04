export default function TeamCard({ name, role }) {
    return (
        <div className="border border-slate-200 rounded-2xl p-8 shadow-sm bg-white">
            <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-black" />
            <p className="font-semibold text-slate-900">{name}</p>
            <p className="text-sm text-slate-500">{role}</p>
        </div>
    );
}
