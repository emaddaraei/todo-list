import React from 'react';

type BlockProps = {
  children: React.ReactNode;
};

export function Block({ children }: BlockProps) {
  return (
    <div className="flex flex-col py-6 px-6 border border-gray-200 rounded-lg gap-4 h-fit">
      {children}
    </div>
  );
}
