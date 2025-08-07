import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addCart,
  getProfileCart,
  removeAllProduct,
  removeCart,
  updateCart,
} from '../../services/cart';
import { CartProps, UpdateProductCartProps } from './index.types';
import { useRouter } from 'next/navigation';
import { useToastify } from '../global/toast-notify';

const useGetProfileCart = ({ isActive }: { isActive: boolean }) => {
  return useQuery(['fetch-profile-cart'], {
    queryFn: () => {
      return getProfileCart();
    },
    enabled: isActive ? true : false,
  });
};

const useAddProductToCart = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { OpenToastify } = useToastify();
  return useMutation({
    mutationFn: (data: CartProps) => {
      return addCart(data);
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success', { position: 'top-right' });
      queryClient.refetchQueries(['fetch-profile-cart']);
      // router.refresh();
    },
    onError: () => {
      //
    },
  });
};

const useRemoveProductOfCart = () => {
  const queryClient = useQueryClient();
  const { OpenToastify } = useToastify();
  return useMutation({
    mutationFn: (data: CartProps) => {
      return removeCart(data);
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success', { position: 'top-right' });
      queryClient.refetchQueries(['fetch-profile-cart']);
      // router.refresh();
    },
    onError: () => {
      //
    },
  });
};

const useUpdateProductOfCart = () => {
  const { OpenToastify } = useToastify();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateProductCartProps) => {
      return updateCart(data);
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success');
      queryClient.refetchQueries(['fetch-profile-cart']);
    },
    onError: () => {},
  });
};

const useRemoveAllProductOfCart = () => {
  const { OpenToastify } = useToastify();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return removeAllProduct();
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success');
      queryClient.refetchQueries(['fetch-profile-cart']);
    },
    onError: () => {},
  });
};

export {
  useGetProfileCart,
  useAddProductToCart,
  useRemoveProductOfCart,
  useUpdateProductOfCart,
  useRemoveAllProductOfCart,
};
