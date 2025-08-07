import React from 'react';
import { cn } from '@/app/lib/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  handleChange(value: any): void;
  parentClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  handleChange,
  parentClassName,
  ...props
}) => {
  return (
    <div className={cn('', parentClassName)}>
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={props.id}
        className={cn(
          ' w-[400px]   px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
        onChange={(e) => handleChange(e.target.value)}
        {...props}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
