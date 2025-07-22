import React from 'react';
import clsx from 'clsx';

export default function Tag({ color }: { color: 'red' | 'orange' | 'blue' | 'green' }) {
  const colorMap = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
  };

  return <span className={clsx('h-2 w-2 rounded-full', colorMap[color])} />;
}
