import React from 'react';

type BulletItemProps = {
  text: string;
  textColor: string;
  bulletColor: string;
};

const BulletItem: React.FC<BulletItemProps> = ({
  text,
  textColor,
  bulletColor,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <div className={`w-2 h-2 ${bulletColor} rounded-full`}> </div>
      <span className={`text-xs ${textColor}`}> {text} </span>
    </div>
  );
};

export default BulletItem;
