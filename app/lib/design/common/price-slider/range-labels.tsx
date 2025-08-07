import { formatToIranianCurrency } from '@/app/lib/utils/curreny';
import React from 'react';
import { RangeLabelsProps } from './index.types';

const RangeLabels = ({ maxRange, minRange, currency }: RangeLabelsProps) => {
  return (
    <div className="flex justify-between mt-8 text-sm text-gray-600">
      <span>{`  ${formatToIranianCurrency(maxRange, currency)}`}</span>
      <span>{`  ${formatToIranianCurrency(minRange, currency)}`}</span>
    </div>
  );
};

export default RangeLabels;
