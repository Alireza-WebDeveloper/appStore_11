'use client';

import React from 'react';

import Text from '@/app/lib/design/common/text';
import { ArrowDownIcon } from '@/app/lib/design/common/icons';
import { DropDownButtonProps } from './index.types';
import { Button } from '@nextui-org/react';

const DropDownButton: React.FC<DropDownButtonProps> = ({
  isOpen,
  toggleDropdown,
  selectedLabel,
  placeholder,
  disabled,
  buttonClassName,
}) => {
  return (
    <Button
       aria-label="btn-dropdown"
      onPress={toggleDropdown}
      className={`flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${buttonClassName}`}
      disabled={disabled}
    >
      <Text size="md">{selectedLabel || placeholder}</Text>
      <Text
        as="span"
        className={`transform transition-transform duration-300 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}
      >
        <ArrowDownIcon width={20} height={20} />
      </Text>
    </Button>
  );
};

export default DropDownButton;
