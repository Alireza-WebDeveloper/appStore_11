import React from 'react';
import { InputContainerProps } from './index.type';
import { cn } from '@/app/lib/utils/cn';

const InputContainer: React.FC<InputContainerProps> = ({
  value,
  onChangeValue,
  selectSize = 'md', // مقدار پیش‌فرض
}) => {
  const size = {
    sm: 'px-2 py-1',
    md: 'px-3 py-1.5',
    lg: 'px-4 py-2',
    xl: 'px-5 py-2.5',
  };

  return (
    <input
      className={cn('rounded-lg bg-gray-300', size[selectSize])}
      value={value}
    />
  );
};

export default InputContainer;
