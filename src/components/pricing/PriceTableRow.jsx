const rowStyles = `
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .price-row {
    animation: slideInUp 0.6s ease-out forwards;
    opacity: 0;
  }
`;

export default function PriceTableRow({ item, index = 0 }) {
  const animationDelay = 0.3 + index * 0.1;

  return (
    <>
      {index === 0 && <style>{rowStyles}</style>}
      <tr
        className="price-row transition-colors hover:bg-slate-50"
        style={{ animationDelay: `${animationDelay}s` }}
      >
        <td className="px-2 py-3 align-middle sm:px-4 sm:py-4 md:px-6 md:py-5">
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4A001A]"></span>
            <div className="min-w-0">
              <div className="wrap-break-word text-sm font-bold text-[#4A001A] sm:text-base">
                {item.name}
              </div>
            </div>
          </div>
        </td>

        <td className="px-2 py-3 align-middle text-xs text-slate-700 sm:px-4 sm:py-4 sm:text-sm md:px-6 md:py-5">
          {item.details.length > 1 ? (
            <div className="space-y-1">
              {item.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {detail.icon === "clock" && (
                    <svg className="h-4 w-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
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

        <td className="px-2 py-3 align-middle sm:px-4 sm:py-4 md:px-6 md:py-5">
          {item.prices.length > 1 ? (
            <div className="space-y-1">
              {item.prices.map((price, idx) => (
                <div key={idx} className="whitespace-nowrap text-base font-bold text-[#4A001A] sm:text-lg md:text-xl">
                  {price.amount}
                </div>
              ))}
            </div>
          ) : item.prices[0].isVariable ? (
            <span className="whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-base font-bold text-[#4A001A] sm:px-3 sm:py-1 sm:text-lg md:text-xl">
              {item.prices[0].amount}
            </span>
          ) : (
            <div className="whitespace-nowrap text-base font-bold text-[#4A001A] sm:text-lg md:text-xl">
              {item.prices[0].amount}
            </div>
          )}
        </td>
      </tr>
    </>
  );
}
