import { formatToIranianCurrency } from '@/app/lib/utils/curreny';
import React from 'react';
import { SliderLabelsProps } from './index.types';

const SliderLabels = ({
  minPrice,
  maxPrice,
  calculatePosition,
}: SliderLabelsProps) => {
  return (
    <div className="absolute -top-10 flex gap-20 w-full">
      <div
        className="text-sm text-indigo-600 font-bold"
        style={{
          left: `${calculatePosition(maxPrice)}%`,
          transform: 'translateX(-50%)',
        }}
      >
        {`  ${formatToIranianCurrency(maxPrice)}`}
      </div>
      <div
        className="text-sm text-indigo-600 font-bold"
        style={{
          left: `${calculatePosition(minPrice)}%`,
          transform: 'translateX(-50%)',
        }}
      >
        {` ${formatToIranianCurrency(minPrice)}`}
      </div>
    </div>
  );
};

export default SliderLabels;
