'use client';

import React, { FC } from 'react';
import Button from '../button';
import { cn } from '@/app/lib/utils/cn';
import { SearchProps } from './index.types';
import Text from '../text';
import Input from '../input';
import { SearchIcon } from '../icons';

const Search: FC<SearchProps> = ({
  placeholder = 'جستجوی محصولات...',
  buttonLabel,
  className,
  value,
  handleGetValue,
  onClick,
}) => {
  return (
    <div className={cn('relative flex items-center', className)}>
      <Input
        parentClassName="w-full"
        type="text"
        value={value}
        handleChange={(value) => handleGetValue(value)}
        placeholder={placeholder}
        className="w-full p-3 pr-12 rounded-full border "
      />
      <Button
        aria-label="btn-search"
        onClick={onClick}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-teal-600 text-white rounded-full"
      >
        <SearchIcon color="white" />
        {buttonLabel && (
          <Text size="sm" className="ml-2 text-white">
            {buttonLabel}
          </Text>
        )}
      </Button>
    </div>
  );
};

export default Search;
