import api from '..';
import { GetCategoriesResponse } from '../../hooks/categories/index.types';
 

const getCategories = async () => {
  const response = await api.get<GetCategoriesResponse>('/categories');
  return response.data;
};

export { getCategories };
