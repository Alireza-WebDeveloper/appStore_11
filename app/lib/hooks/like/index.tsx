import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addLikesUser,
  getLikesUser,
  removeAllLikesUser,
  removeLikesUser,
} from '../../services/like';
import { LikesUserProps } from './index.types';
import { useToastify } from '../global/toast-notify';

const useGetLikesUser = ({ isActive }: { isActive: boolean }) => {
  return useQuery(['fetch-likes-user'], {
    queryFn: () => {
      return getLikesUser();
    },
    enabled: isActive,
  });
};

const useAddLikesUser = () => {
  return useMutation({
    mutationFn: ({ productId }: LikesUserProps) => {
      return addLikesUser({ productId });
    },
  });
};

const useRemoveLikesUser = () => {
  return useMutation({
    mutationFn: ({ productId }: LikesUserProps) => {
      return removeLikesUser({ productId });
    },
  });
};

const useRemoveAllLikesUser = () => {
  const { OpenToastify } = useToastify();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return removeAllLikesUser();
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success');
      queryClient.refetchQueries(['fetch-likes-user']);
    },
    onError: () => {},
  });
};

export {
  useGetLikesUser,
  useAddLikesUser,
  useRemoveLikesUser,
  useRemoveAllLikesUser,
};
