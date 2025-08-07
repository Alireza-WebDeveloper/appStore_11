'use client';

import PriceRangeSlider from '@/app/lib/design/common/price-slider';
import { useGetFilters } from '@/app/lib/hooks/filter';

import { useCreateQueryStrings } from '@/app/lib/hooks/global/useCreateQueryStringParams';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const PriceFilter = () => {
  // !! Params
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useCreateQueryStrings();

  // !! Fetch
  const { data } = useGetFilters({ field: 'price' });

  const getPriceFilter = data?.data[0];

  // !! Variable
  const minRange = getPriceFilter?.minValue;
  const maxRange = getPriceFilter?.maxValue;

  const initialMinValue = searchParam.get('minPrice') || minRange;
  const initialMaxValue = searchParam.get('maxPrice') || maxRange;

  return (
    <div className="mt-4">
      {getPriceFilter && (
        <PriceRangeSlider
           
          className="w-[90%]"
          minRange={Number(minRange)}
          maxRange={Number(maxRange)}
          initialMinValue={Number(initialMinValue)}
          initialMaxValue={Number(initialMaxValue)}
          currency="toman"
          onChange={(minValue, maxValue) => {
            createQueryString({
              pathname,
              router,
              params: [
                {
                  name: 'minPrice',
                  value: String(minValue),
                },
                {
                  name: 'maxPrice',
                  value: String(maxValue),
                },
              ],
            });
          }}
        />
      )}
    </div>
  );
};

export default PriceFilter;
