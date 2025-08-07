'use client';

import React from 'react';
import Text from '@/app/lib/design/common/text';
import { ArrowDownIcon } from '@/app/lib/design/common/icons';
import { DropDownLineProps } from './index.types';

const DropDownLine: React.FC<DropDownLineProps> = ({
  isOpen,
  toggleDropdown,
  selectedLabel,
  placeholder,
  disabled,
}) => {
  return (
    <div
      onClick={toggleDropdown}
      className={`relative cursor-pointer flex items-center justify-between border-b-2 ${
        disabled
          ? 'opacity-50 cursor-not-allowed border-gray-300'
          : 'border-indigo-500'
      }`}
    >
      <Text
        size="md"
        className={`pb-1 text-gray-700 ${
          disabled ? 'text-gray-400' : 'hover:text-indigo-600'
        }`}
      >
        {selectedLabel || placeholder}
      </Text>
      <span
        className={`transform transition-transform duration-300 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}
      >
        <ArrowDownIcon width={20} height={20} />
      </span>
    </div>
  );
};

export default DropDownLine;
