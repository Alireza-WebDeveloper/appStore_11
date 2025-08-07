import { useCallback } from 'react';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface Param {
  name: string;
  value: string;
}

interface SearchParams {
  pathname: string;
  router: AppRouterInstance;
  params: Param[];
}

export const useCreateQueryStrings = () => {
  return useCallback(({ pathname, router, params }: SearchParams) => {
    const searchParams = new URLSearchParams(window.location.search);

    params.forEach(({ name, value }) => {
      if (value) {
        searchParams.set(name, value);
      } else {
        searchParams.delete(name);
      }
    });

    const newUrl = `${pathname}?${String(searchParams)}`;
    router.push(newUrl, { scroll: false });
  }, []);
};
