// SliderTrack.tsx
import React from 'react';
import { SliderTrackProps } from './index.types';

const SliderTrack: React.FC<SliderTrackProps> = ({
  minPrice,
  maxPrice,
  calculatePosition,
}) => {
  return (
    <div className="relative h-2 bg-gray-300 rounded-full">
      <div
        className="absolute h-2 bg-indigo-600 rounded-full"
        style={{
          left: `${calculatePosition(minPrice)}%`,
          width: `${
            calculatePosition(maxPrice) - calculatePosition(minPrice)
          }%`,
        }}
      ></div>
    </div>
  );
};

export default SliderTrack;
