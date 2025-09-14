export function Button({
  buttonText,
  buttonTextColor,
  buttonBgColor,
  buttonIcon,
}) {
  return (
    <button
      className={`flex gap-1 items-center px-4 py-3 text-sm ${buttonBgColor} ${buttonTextColor}
      } rounded-lg`}
    >
      {buttonIcon}
      {buttonText}
    </button>
  );
}
