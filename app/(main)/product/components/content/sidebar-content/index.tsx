import React from 'react';
import { Props } from './index.types';
import { cn } from '@/app/lib/utils/cn';
import SideFilter from './side-filter';
import SortFilter from './sort-filter';
import CategoriesFilter from './categories-filter';
import Brand from './brand';
import PriceFilter from './price-filter';
import ResetFilter from './reset-filter';

const SideBarContent: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex flex-col  gap-8 px-6 py-3 h-fit rounded-lg bg-white bg-opacity-50 backdrop-blur-lg border border-gray-500 border-opacity-20',
        className
      )}
    >
      <SideFilter title="">
        <ResetFilter />
      </SideFilter>
      <SideFilter title="مرتب سازی">
        <SortFilter />
      </SideFilter>
      <SideFilter title="دسته بندی">
        <CategoriesFilter />
      </SideFilter>
      <SideFilter title="برند محصول">
        <Brand />
      </SideFilter>
      <SideFilter title="قیمت">
        <PriceFilter />
      </SideFilter>
    </div>
  );
};

export default SideBarContent;
