import { useQuery } from '@tanstack/react-query';
import { GetFiltersProps } from './index.types';
import { getFilter } from '../../services/filter';

const useGetFilters = (params: GetFiltersProps) => {
  return useQuery(['fetch-filters', params], {
    queryFn: () => {
      return getFilter(params);
    },
  });
};

export { useGetFilters };
