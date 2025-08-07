import React from 'react';
import { Slider } from '@heroui/react';
import { BudgetSliderProps } from './index.types';
import { cn } from '@/app/lib/utils/cn';
import Text from '../text';

const BudgetSlider: React.FC<BudgetSliderProps> = ({
  minValue = 0,
  maxValue = 10000000,
  step = 10000,
  value,
  onChange,
  label = 'بودجه مورد نظر را انتخاب کنید',
  className = '',
}) => {
  const handleChange = (val: number | number[]) => {
    if (Array.isArray(val)) {
      onChange(val);
    }
  };

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Slider
        size="lg"
        className="max-w-md"
        formatOptions={{
          style: 'decimal',
        }}
        label={label}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <div className="text-default-500 font-medium text-small flex items-center gap-2">
        <Text>بودجه انتخاب‌شده:</Text>
        <Text className="text-primary font-semibold">
          {value
            .slice()
            .sort((a, b) => b - a)
            .map(
              (b) =>
                `${new Intl.NumberFormat('fa-IR', {
                  style: 'decimal',
                  minimumFractionDigits: 0,
                }).format(b)} تومان`
            )
            .join(' – ')}
        </Text>
      </div>
    </div>
  );
};

export default BudgetSlider;
