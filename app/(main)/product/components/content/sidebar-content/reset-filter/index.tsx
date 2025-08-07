'use client';

import { getAllSearchParams } from '@/app/lib/utils/params/get-all-search-params';
import { createFilter } from '@/app/lib/utils/params/has-filter';
import { Button } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';

const ResetFilter = () => {
  // !! Params
  const router = useRouter();
  const searchParam = useSearchParams();
  const getAllParams = getAllSearchParams(searchParam);
  const hasFilter = createFilter(getAllParams);

  return (
    <>
      {hasFilter && (
        <Button
         aria-label="delete-filter"
          color="danger"
          className="w-fit flex items-center gap-2"
          onPress={() => {
            router.push('?', { scroll: false });
          }}
        >
          حذف فیلتر
        </Button>
      )}
    </>
  );
};

export default ResetFilter;
