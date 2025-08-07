'use client';

import { useEffect, useState } from 'react';
import Search from '../../../common/search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCreateQueryStrings } from '@/app/lib/hooks/global/useCreateQueryStringParams';

const SearchBar = () => {
  const [value, setValue] = useState('');

  // !! Params
  const pathname = usePathname();
  const router = useRouter();
  const createQueryStringParams = useCreateQueryStrings();
  const searchParam = useSearchParams();

  const name = searchParam.get('name') || '';

  useEffect(() => {
    if (pathname === '/product') {
      setValue(name);
    } else {
      setValue('');
    }
  }, [pathname, name]);

  return (
    <Search
      className="w-[700px] text-black"
      onClick={() => {
        if (pathname === '/product') {
          createQueryStringParams({
            pathname,
            router,
            params: [
              { name: 'name', value },
              {
                name: 'category',
                value: '',
              },
            ],
          });
        } else {
          router.push(`/product?name=${value}`);
        }
      }}
      value={value}
      handleGetValue={(value) => setValue(value)}
    />
  );
};

export default SearchBar;
