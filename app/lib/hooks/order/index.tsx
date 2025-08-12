import { useQuery } from '@tanstack/react-query';
import { getOrder } from '../../services/order';

const useFetchOrder = () => {
  return useQuery(['fetch-order'], () => {
    return getOrder();
  });
};

export { useFetchOrder };
