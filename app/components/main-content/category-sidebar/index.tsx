'use client';

import Animation from '@/app/lib/design/common/animation';
import { LeftArrowContainIcon } from '@/app/lib/design/common/icons';
import LinkContainer from '@/app/lib/design/common/link-container';
import Text from '@/app/lib/design/common/text';
import { useGetCategories } from '@/app/lib/hooks/categories';
import { cn } from '@/app/lib/utils/cn';

const CategorySideBar = () => {
  const { data: getCategories, isLoading } = useGetCategories();

  return (
    <aside
      className={cn(
        'flex flex-col gap-2 overflow-y-auto max-h-[65vh] p-2 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 transition-all rounded-md'
      )}
    >
      {isLoading ? (
        <div className="p-4">
          <Animation />
        </div>
      ) : (
        getCategories?.data.categories.map(({ _id, name }) => (
          <LinkContainer
            key={_id}
            href={`/product?category=${_id}`}
            className={cn(
              'flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200',
              'bg-white hover:bg-teal-500 text-gray-800 hover:text-white shadow-sm hover:shadow-md'
            )}
          >
            <Text as="span" size="lg" className="truncate">
              {name}
            </Text>
            <span className="shrink-0">
              <LeftArrowContainIcon />
            </span>
          </LinkContainer>
        ))
      )}
    </aside>
  );
};

export default CategorySideBar;
