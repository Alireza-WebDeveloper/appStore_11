import api from '..';
import {
  GetLikesUserResponse,
  LikesUserProps,
} from '../../hooks/like/index.types';

const getLikesUser = async () => {
  const response = await api.get<GetLikesUserResponse>('/likes');
  return response.data;
};

const addLikesUser = async ({ productId }: LikesUserProps) => {
  const response = await api.post(`/likes/${productId}`);
  return response.data;
};

const removeLikesUser = async ({ productId }: LikesUserProps) => {
  const response = await api.delete(`/likes/${productId}`);
  return response.data;
};

const removeAllLikesUser = async () => {
  const response = await api.delete(`/likes`);
  return response.data;
};

export { getLikesUser, addLikesUser, removeLikesUser, removeAllLikesUser };
