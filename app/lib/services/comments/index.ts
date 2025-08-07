import api from '..';
import {
  CreateCommentProps,
  CreateReplyCommentProps,
  GetCommentsProps,
  GetCommentsResponse,
} from '../../hooks/comments/index.types';
import { createParams } from '../../utils/create-params';

const getCommentsByProductId = async (data: GetCommentsProps) => {
  const { params, productId } = data;

  const createQuery = createParams(params);

  const response = await api.get<GetCommentsResponse>(
    `/comment/${productId}?${createQuery}`
  );

  return response.data;
};

const createComment = async (data: CreateCommentProps) => {
  const response = await api.post('/comment', data);
  return response.data;
};

const replyComment = async (data: CreateReplyCommentProps) => {
  const response = await api.post('replyComment', data);
  return response.data;
};

export { getCommentsByProductId, createComment, replyComment };
