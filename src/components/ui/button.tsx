import React from 'react';

interface ButtonProps {
  buttonText: string;
  buttonTextColor: string;
  buttonBgColor: string;
  buttonIcon: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonTextColor,
  buttonBgColor,
  buttonIcon,
}) => {
  return (
    <button
      className={`flex gap-1 items-center px-4 py-3 text-sm ${buttonBgColor} ${buttonTextColor} rounded-lg`}
    >
      {buttonIcon}
      <span>{buttonText}</span>
    </button>
  );
};

export default Button;
