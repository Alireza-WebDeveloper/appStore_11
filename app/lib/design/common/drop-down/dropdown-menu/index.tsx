'use client';

import React from 'react';
import Button from '@/app/lib/design/common/button';
import { DropdownMenuProps } from './index.types';
import Text from '../../text';

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  options,
  handleSelect,
  emptyMessage,
  dropdownClassName,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`absolute right-0 z-10 w-full top-full origin-top-right bg-white divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 ${dropdownClassName}`}
      role="menu"
    >
      {options.length > 0 ? (
        <ul className="py-1">
          {options.map((option) => (
            <li key={option.value}>
              <Button
                aria-label="product-menu-item"
                className="block w-full px-4 py-2 text-lg text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                role="menuitem"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <Text className="px-4 py-2 text-sm text-gray-500">{emptyMessage}</Text>
      )}
    </div>
  );
};

export default DropdownMenu;
