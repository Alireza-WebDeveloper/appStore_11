import { useQuery } from '@tanstack/react-query';

import { getProductById, getProducts } from '../../services/product';
import { GetProductByIdProps, GetProductProps } from './index.types';

const useGetProductById = ({ id }: GetProductByIdProps) => {
  return useQuery(['product', id], {
    queryFn: () => {
      return getProductById({ id });
    },
  });
};

const useGetProducts = (params: GetProductProps) => {
  const queryKeys = ['fetch-products', params];
  return useQuery(queryKeys, {
    queryFn: () => {
      return getProducts(params);
    },
  });
};

export { useGetProductById, useGetProducts };
