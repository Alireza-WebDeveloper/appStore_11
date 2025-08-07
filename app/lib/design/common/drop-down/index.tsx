'use client';

import React, { useState } from 'react';
import Text from '@/app/lib/design/common/text';

import DropDownLine from './dropdown-line';
import DropDownButton from './dropdown-button';
import { cn } from '@/app/lib/utils/cn';
import { DropDownProps, Option } from './index.types';
import DropdownMenu from './dropdown-menu';

const DropDown: React.FC<DropDownProps> = ({
  options,
  onSelect,
  placeholder = 'Select Option',
  disabled = false,
  selectedValue = null,
  emptyMessage = 'No options available',
  className,
  buttonClassName = '',
  dropdownClassName = '',
  variant = 'button',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative flex flex-col gap-2', className)}>
      <Text size="xl">{placeholder}</Text>

      {variant === 'button' ? (
        <DropDownButton
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          selectedLabel={selectedValue?.label || null}
          placeholder={placeholder}
          disabled={disabled}
          buttonClassName={buttonClassName}
        />
      ) : (
        <DropDownLine
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          selectedLabel={selectedValue?.label || null}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}

      <DropdownMenu
        isOpen={isOpen}
        options={options}
        handleSelect={handleSelect}
        emptyMessage={emptyMessage}
        dropdownClassName={dropdownClassName}
      />
    </div>
  );
};

export default DropDown;
