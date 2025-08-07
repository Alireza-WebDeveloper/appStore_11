import { useMutation, useQuery } from '@tanstack/react-query';
import {
  CreateCommentProps,
  CreateReplyCommentProps,
  GetCommentsProps,
} from './index.types';
import {
  createComment,
  getCommentsByProductId,
  replyComment,
} from '../../services/comments';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useToastify } from '../global/toast-notify';

const useGetComments = ({ productId, params }: GetCommentsProps) => {
  return useQuery(['fetch-comments', productId, params], {
    queryFn: () => {
      return getCommentsByProductId({ productId, params });
    },
  });
};

const useCreateComment = () => {
  const router = useRouter();
  const { OpenToastify } = useToastify();
  return useMutation({
    mutationFn: (data: CreateCommentProps) => {
      return createComment(data);
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success');
      router.refresh();
    },
    onError: () => {
      //
    },
  });
};

const useCreateReplyComment = () => {
  const router = useRouter();
  const { OpenToastify } = useToastify();
  return useMutation({
    mutationFn: (data: CreateReplyCommentProps) => {
      return replyComment(data);
    },
    onSuccess: (response) => {
      OpenToastify(response.message, 'success');

      router.refresh();
    },
    onError: () => {
      //
    },
  });
};

export { useGetComments, useCreateComment, useCreateReplyComment };
