import api from '..';
import {
  GetProductByIdProps,
  GetProductByIdResponse,
  GetProductProps,
  GetProductsResponse,
} from '../../hooks/product/index.types';
import { createParams } from '../../utils/create-params';

const getProductById = async ({ id }: GetProductByIdProps) => {
  const response = await api.get<GetProductByIdResponse>(`/product/${id}`);
  return response.data;
};

const getProducts = async (params: GetProductProps) => {
  const newParams = createParams(params);
  const response = await api.get<GetProductsResponse>(`/product?${newParams}`);
  return response.data;
};

export { getProductById, getProducts };
