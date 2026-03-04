export default function PriceTableRow({ item, hoverColor = "rose-50" }) {
    return (
        <tr className={`hover:bg-${hoverColor} transition-colors`}>
            <td className="px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 align-middle">
                <div className="flex items-start gap-1.5 sm:gap-2">
                    <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-${item.dotColor} rounded-full mt-1.5 shrink-0`}></span>
                    <div className="min-w-0">
                        <div className="font-bold text-[#4A001A] text-sm sm:text-base wrap-break-word">{item.name}</div>
                        {item.badge && (
                            <span className={`text-[10px] sm:text-xs text-${item.badge.color}-600 font-semibold bg-${item.badge.color}-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full mt-1 inline-block -ml-1.5 sm:-ml-2`}>
                                {item.badge.text}
                            </span>
                        )}
                    </div>
                </div>
            </td>
            <td className="px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 text-slate-700 align-middle text-xs sm:text-sm">
                {item.details.length > 1 ? (
                    <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                {detail.icon === "clock" && (
                                    <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {detail.text}
                            </div>
                        ))}
                    </div>
                ) : (
                    item.details[0].text
                )}
            </td>
            <td className="px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 align-middle">
                {item.prices.length > 1 ? (
                    <div className="space-y-0.5 sm:space-y-1">
                        {item.prices.map((price, idx) => (
                            <div key={idx} className={`text-base sm:text-lg md:text-xl font-bold text-${price.color} whitespace-nowrap`}>
                                {price.amount}
                            </div>
                        ))}
                    </div>
                ) : item.prices[0].isVariable ? (
                    <span className={`text-base sm:text-lg md:text-xl font-bold text-${item.prices[0].color} bg-${item.prices[0].color.split('-')[0]}-50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg whitespace-nowrap`}>
                        {item.prices[0].amount}
                    </span>
                ) : (
                    <div className={`text-base sm:text-lg md:text-xl font-bold text-${item.prices[0].color} whitespace-nowrap`}>
                        {item.prices[0].amount}
                    </div>
                )}
            </td>
        </tr>
    );
}
