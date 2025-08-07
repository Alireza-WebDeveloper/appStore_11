'use client';
import { cn } from '@/app/lib/utils/cn';
import React, { FC } from 'react';
import { Props } from './index.types';
import Animation from '../animation';

const Button: FC<Props> = ({
  children,
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  isDisabled = false,
  isOutline = false,
  ...rest
}) => {
  const baseClasses =
    'flex items-center justify-center font-medium rounded  transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const outlineClasses = isOutline ? 'border-2 bg-transparent' : '';

  const disabledClasses = isLoading ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      aria-label=""
      className={cn(baseClasses, outlineClasses, disabledClasses, className)}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <Animation />
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
