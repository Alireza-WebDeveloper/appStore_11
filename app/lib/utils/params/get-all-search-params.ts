import { ReadonlyURLSearchParams } from 'next/navigation';

export const getAllSearchParams = (
  searchParams: ReadonlyURLSearchParams
): Record<string, string> => {
  const params: Record<string, string> = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};
