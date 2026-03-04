import PriceTableRow from "./PriceTableRow";

export default function PricingTable({
    title,
    subtitle,
    icon,
    data,
    tableHeaders
}) {
    return (
        <div className="mb-8 sm:mb-12 md:mb-20">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4A001A] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                </div>
                <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4A001A]">{title}</h2>
                    <p className="text-slate-600 text-xs sm:text-sm">{subtitle}</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-linear-to-r from-[#4A001A] to-rose-900">
                            <tr>
                                {tableHeaders.map((header, idx) => (
                                    <th
                                        key={idx}
                                        className="px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 text-left font-bold text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wider"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {data.map((item) => (
                                <PriceTableRow key={item.id} item={item} hoverColor="rose-50" />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
