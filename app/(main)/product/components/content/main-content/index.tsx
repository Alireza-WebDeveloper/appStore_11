'use client';
import React from 'react';
import { Props } from './index.types';
import { cn } from '@/app/lib/utils/cn';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useGetFilters } from '@/app/lib/hooks/filter';
import { useGetProducts } from '@/app/lib/hooks/product';
import { SortByFilterState } from '@/app/lib/hooks/product/index.types';
import ProductList from './product-list';
import { Pagination } from '@nextui-org/react';
import { useCreateQueryStrings } from '@/app/lib/hooks/global/useCreateQueryStringParams';
import NoResult from '@/app/lib/design/common/no-result';
import Animation from '@/app/lib/design/common/animation';

const MainContent: React.FC<Props> = ({ className }) => {
  // !! Fetch
  const { data: getFilters } = useGetFilters({ field: 'price' });
  const getPriceFilter = getFilters && getFilters?.data[0];

  //  !! Param Hook
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStrings();

  // !! Get Params
  const sortby = (searchParam.get('sortby') as SortByFilterState) || '';
  const category = searchParam.get('category') || '';
  const page = Number(searchParam.get('page')) || 1;
  const name = searchParam.get('name') || '';
  const brand = searchParam.get('brand') || '';
  const limit = 10;
  const minPrice =
    Number(searchParam.get('minPrice')) || getPriceFilter?.minValue;
  const maxPrice =
    Number(searchParam.get('maxPrice')) || getPriceFilter?.maxValue;

  // !! Fetch
  const {
    data: getProduct,
    refetch,
    isLoading,
    isRefetching,
  } = useGetProducts({
    sortby,
    category,
    page,
    name,
    brand,
    limit,
    minPrice,
    maxPrice,
  });

  const products = getProduct?.data.products;
  const loading = isLoading || isRefetching;
  // !! Handlers
  const handlePagination = (numberPage: number) => {
    createQueryString({
      pathname,
      router,
      params: [
        {
          name: 'page',
          value: String(numberPage),
        },
      ],
    });
  };

  return (
    <div className={cn('flex flex-col gap-10 items-center', className)}>
      {loading ? (
        <Animation />
      ) : products ? (
        <ProductList products={products} refetchProduct={refetch} />
      ) : (
        <NoResult />
      )}

      <Pagination
        showControls
        onChange={handlePagination}
        initialPage={page}
        total={getProduct?.data.totalPages || 0}
      />
    </div>
  );
};

export default MainContent;
