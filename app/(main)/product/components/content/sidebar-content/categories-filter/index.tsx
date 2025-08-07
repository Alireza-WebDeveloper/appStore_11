'use client';

import { useGetCategories } from '@/app/lib/hooks/categories';
import { Props } from './index.types';

import Text from '@/app/lib/design/common/text';
import Category from './category';
import { usePathname, useRouter } from 'next/navigation';
import { useCreateQueryStrings } from '@/app/lib/hooks/global/useCreateQueryStringParams';

const CategoriesFilter: React.FC<Props> = () => {
  // !! Params
  const pathname = usePathname();
  const router = useRouter();
  const createQueryStringParams = useCreateQueryStrings();

  //!!  Fetch categories
  const { data: getCategories } = useGetCategories();

  return (
    <div>
      <section className="flex flex-col gap-4">
        <section
          className="p-2 cursor-pointer"
          onClick={() => {
            createQueryStringParams({
              pathname,
              router,
              params: [{ name: 'category', value: '' }],
            });
          }}
        >
          <Text size="md" className="text-gray-800">
            همه
          </Text>
        </section>

        {getCategories?.data.categories.map((category) => {
          return <Category item={category} key={category._id} />;
        })}
      </section>
    </div>
  );
};

export default CategoriesFilter;
