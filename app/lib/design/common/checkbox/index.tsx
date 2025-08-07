import React from 'react';
import Text from '../text';
import Input from '../input';
import { cn } from '@/app/lib/utils/cn';

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  handleChange,
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Input
        handleChange={(value) => handleChange(value)}
        type="checkbox"
        id={id}
        checked={checked}
        className="
        cursor-pointer
         h-6 w-6 rounded-full border-2 border-gray-300 
         text-transparent bg-white focus:ring-2 focus:ring-blue-500 
         checked:bg-blue-600 checked:border-blue-600 
         checked:ring-2 checked:ring-blue-400
         transition-all duration-300 ease-in-out
         transform hover:scale-110
       "
      />

      <Text size="xl" className="font-medium text-gray-800">
        {label}
      </Text>
    </div>
  );
};

export default Checkbox;
