export default function Chip({ chipText, chipBgColor, chipTextColor }) {
  return (
    <div
      className={`text-xs px-2 py-0.5 rounded-full ${chipBgColor} ${chipTextColor}`}
    >
      {chipText}
    </div>
  );
}
