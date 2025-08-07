// PriceRangeSlider.tsx
import React, { useState, useEffect, useRef } from 'react';

import { PriceRangeSliderProps } from './index.types';
import SliderTrack from './slider-track';
import SliderThumb from './slider-thumb';
import SliderLabels from './slider-labels';
import RangeLabels from './range-labels';
import { cn } from '@/app/lib/utils/cn';

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  minRange,
  maxRange,
  initialMinValue,
  initialMaxValue,
  currency,
  onChange,
  className,
}) => {
  const [minPrice, setMinPrice] = useState(initialMinValue);
  const [maxPrice, setMaxPrice] = useState(initialMaxValue);
  const [flag, setFlag] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (onChange && flag) {
        onChange(minPrice, maxPrice);
      }
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [minPrice, maxPrice, onChange, flag]);

  const handleMinChange = (newValue: number) => {
    const updatedMin = Math.min(newValue, maxPrice - 1);
    setMinPrice(updatedMin);
    setFlag(true);
  };

  const handleMaxChange = (newValue: number) => {
    const updatedMax = Math.max(newValue, minPrice + 1);
    setMaxPrice(updatedMax);
    setFlag(true);
  };

  const calculatePosition = (value: number) => {
    return ((value - minRange) / (maxRange - minRange)) * 100;
  };

  return (
    <div
      className={cn(
        'relative w-full max-w-md mx-auto cursor-pointer',
        className
      )}
    >
      <SliderTrack
        minPrice={minPrice}
        maxPrice={maxPrice}
        calculatePosition={calculatePosition}
      />
      <SliderThumb
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={calculatePosition(minPrice)}
        onMouseDown={(e) => {
          const slider = e.currentTarget.parentElement!;
          const handleMouseMove = (moveEvent: MouseEvent) => {
            const rect = slider.getBoundingClientRect();
            const newX = Math.min(
              Math.max(moveEvent.clientX - rect.left, 0),
              rect.width
            );
            const newValue = Math.round(
              (newX / rect.width) * (maxRange - minRange) + minRange
            );
            handleMinChange(newValue);
          };
          const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
          };
          window.addEventListener('mousemove', handleMouseMove);
          window.addEventListener('mouseup', handleMouseUp);
        }}
      />
      <SliderThumb
        position={calculatePosition(maxPrice)}
        onMouseDown={(e) => {
          const slider = e.currentTarget.parentElement!;
          const handleMouseMove = (moveEvent: MouseEvent) => {
            const rect = slider.getBoundingClientRect();
            const newX = Math.min(
              Math.max(moveEvent.clientX - rect.left, 0),
              rect.width
            );
            const newValue = Math.round(
              (newX / rect.width) * (maxRange - minRange) + minRange
            );
            handleMaxChange(newValue);
          };
          const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
          };
          window.addEventListener('mousemove', handleMouseMove);
          window.addEventListener('mouseup', handleMouseUp);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <SliderLabels
        minPrice={minPrice}
        maxPrice={maxPrice}
        calculatePosition={calculatePosition}
      />
      <RangeLabels
        minRange={minRange}
        maxRange={maxRange}
        currency={currency}
      />
    </div>
  );
};

export default PriceRangeSlider;
