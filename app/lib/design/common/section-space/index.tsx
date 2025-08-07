  import React from 'react';
  import { cn } from '@/app/lib/utils/cn';
  import { Props } from './index.types';

  const SectionSpace: React.FC<Props> = ({ children, className }) => {
    return (
      <section className={cn('mx-auto container  mt-4', className)}>
        {children}
      </section>
    );
  };

  export default SectionSpace;
