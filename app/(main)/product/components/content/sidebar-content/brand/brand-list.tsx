'use client';

import { useGetBrands } from '@/app/lib/hooks/brands';
import { useCreateQueryStrings } from '@/app/lib/hooks/global/useCreateQueryStringParams';
import { Checkbox } from '@nextui-org/react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const BrandList = () => {
  // !! Fetch Brands
  const { data: getBrands } = useGetBrands();

  // !! Params
  const searchParams = useSearchParams();
  const createQueryStringParams = useCreateQueryStrings();
  const pathname = usePathname();
  const router = useRouter();

  const brandIdParams = searchParams.get('brand') || '';

  return (
    <div className="flex flex-col gap-4">
      {getBrands?.data.map((brand) => {
        return (
          <Checkbox
            isSelected={brandIdParams === brand._id}
            onChange={() => {
              createQueryStringParams({
                pathname,
                router,
                params: [
                  {
                    name: 'brand',
                    value: brand._id,
                  },
                ],
              });
            }}
            size="md"
            key={brand._id}
          >
            {brand.name}
          </Checkbox>
        );
      })}
    </div>
  );
};

export default BrandList;
