import { useQuery } from '@tanstack/react-query';
import { getBrands } from '../../services/brands';

const useGetBrands = () => {
  const queryKey = ['fetch-brands'];
  return useQuery(queryKey, {
    queryFn: () => {
      return getBrands();
    },
  });
};

export { useGetBrands };
