import React from 'react';

interface ChipProps {
  chipText: string;
  chipBgColor: string;
  chipTextColor: string;
}

const Chip: React.FC<ChipProps> = ({
  chipText,
  chipBgColor,
  chipTextColor,
}) => {
  return (
    <div
      className={`text-xs px-2 py-0.5 rounded-full font-medium ${chipBgColor} ${chipTextColor}`}
    >
      {chipText}
    </div>
  );
};

export default Chip;
