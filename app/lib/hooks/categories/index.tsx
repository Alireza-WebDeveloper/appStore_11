import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../services/categories';

const useGetCategories = () => {
  return useQuery(['categories'], {
    queryFn: () => {
      return getCategories();
    },
  });
};

export { useGetCategories };
