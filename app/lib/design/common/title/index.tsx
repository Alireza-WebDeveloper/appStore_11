import React, { FC } from 'react';
import { cn } from '@/app/lib/utils/cn';
import { TitleProps } from './index.types';

const Title: FC<TitleProps> = ({ level = 1, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseClasses = 'font-bold text-gray-800';
  const levelClasses = {
    1: 'text-3xl md:text-4xl',
    2: 'text-2xl md:text-3xl',
    3: 'text-xl md:text-2xl',
    4: 'text-lg md:text-xl',
    5: 'text-base md:text-lg',
    6: 'text-sm md:text-base',
  };

  return (
    <Tag className={cn(baseClasses, levelClasses[level], className)}>
      {children}
    </Tag>
  );
};

export default Title;
