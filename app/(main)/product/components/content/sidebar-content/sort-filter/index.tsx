'use client';

import DropDown from '@/app/lib/design/common/drop-down';
import { Options } from './option';
import { OptionState } from '@/app/lib/types/option';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCreateQueryStrings } from '@/app/lib/hooks/global/useCreateQueryStringParams';

const SortFilter = () => {
  // !! Params
  const searchParams = useSearchParams();
  const createQueryStringParams = useCreateQueryStrings();
  const pathname = usePathname();
  const router = useRouter();

  // !! Variable
  const sortByParam = searchParams.get('sortby') || Options[0];

  const selectOption =
    Options.find((option) => option.value === sortByParam) || Options[0];

  return (
    <>
      <DropDown
        variant="line"
        options={Options}
        onSelect={(option: OptionState) => {
          createQueryStringParams({
            pathname,
            router,
            params: [{ name: 'sortby', value: String(option.value) }],
          });
        }}
        placeholder=""
        emptyMessage="گزینه ای موجود نیست"
        selectedValue={selectOption}
        buttonClassName="shadow-none bg-white text-black"
        dropdownClassName="bg-red-500"
      />
    </>
  );
};

export default SortFilter;
