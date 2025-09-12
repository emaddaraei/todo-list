export default function ReportCards({
  cardIcon,
  cardTitle,
  cardSubtitle,
  cardNumber,
  cardColor,
}) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-xs flex justify-between h-fit">
      <div className="flex flex-col gap-4">
        <div className={`flex items-center p-3 ${cardColor} rounded-md w-fit`}>
          {cardIcon}
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-bold">{cardTitle}</h2>
          <span className="text-xs text-gray-400">{cardSubtitle}</span>
        </div>
      </div>
      <span className="text-2xl font-bold">{cardNumber}</span>
    </div>
  );
}
