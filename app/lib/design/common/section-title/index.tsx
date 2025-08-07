import React from 'react';
import { cn } from '@/app/lib/utils/cn'; // اگر ابزار cn دارید
import { Props } from './index.types';

const SectionTitle: React.FC<Props> = ({
  title,
  className = '',
  lineClassName = '',
  isActiveLine = true,
}) => {
  return (
    <div className={cn('flex items-center gap-5', className)}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {isActiveLine && (
        <span
          className={cn('h-[1px] w-[60%] bg-gray-300 flex-1', lineClassName)}
        ></span>
      )}
    </div>
  );
};

export default SectionTitle;
