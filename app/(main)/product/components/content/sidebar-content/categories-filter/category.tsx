import React from 'react';
import Text from '@/app/lib/design/common/text';
import { CategoryProps } from './index.types';
import { useCreateQueryStrings } from '@/app/lib/hooks/global/useCreateQueryStringParams';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Category: React.FC<CategoryProps> = ({ item }) => {
  // !! Params
  const pathname = usePathname();
  const router = useRouter();
  const createQueryStringParams = useCreateQueryStrings();
  const searchParams = useSearchParams();
  const categoryIdParam = searchParams.get('category');

  return (
    <section
      className="p-2 cursor-pointer"
      onClick={() => {
        createQueryStringParams({
          pathname,
          router,
          params: [{ name: 'category', value: item._id }],
        });
      }}
    >
      <Text
        size="md"
        className={`${categoryIdParam === item._id ? 'text-primary-500' : ''}`}
      >
        {item.name}
      </Text>
    </section>
  );
};

export default Category;
