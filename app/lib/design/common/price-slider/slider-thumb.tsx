import React from 'react';
import { SliderThumbProps } from './index.types';

const SliderThumb: React.FC<SliderThumbProps> = ({
  position,
  onMouseDown,
  onClick,
}) => {
  return (
    <div
      className="absolute w-6 h-6 bg-indigo-600 rounded-full cursor-pointer -top-2"
      onClick={onClick}
      style={{ left: `${position}%` }}
      onMouseDown={onMouseDown}
    ></div>
  );
};

export default SliderThumb;
