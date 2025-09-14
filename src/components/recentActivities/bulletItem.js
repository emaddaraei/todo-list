export default function BulletItem({ text, textColor, bulletColor }) {
  return (
    <div className="flex gap-2 items-center">
      <div className={`w-2 h-2 ${bulletColor} rounded-full`}> </div>
      <span className={`text-xs ${textColor}`}> {text} </span>
    </div>
  );
}
