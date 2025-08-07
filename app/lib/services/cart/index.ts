import api from '..';
import {
  CartProps,
  UpdateProductCartProps,
} from '../../hooks/cart/index.types';
import { GetProfileCartResponse } from '../types/cart';

const getProfileCart = async () => {
  const response = await api.get<GetProfileCartResponse>('/cart');
  return response.data;
};

const addCart = async (data: CartProps) => {
  const response = await api.post('/cart', data);
  return response.data;
};

const removeCart = async ({ productId }: CartProps) => {
  const response = await api.delete(`/cart/remove/product/${productId}`);
  return response.data;
};

const updateCart = async (data: UpdateProductCartProps) => {
  const response = await api.put('/cart', data);
  return response.data;
};

const removeAllProduct = async () => {
  const response = await api.delete('/cart/remove/cart');
  return response.data;
};

export { getProfileCart, addCart, removeCart, updateCart, removeAllProduct };
