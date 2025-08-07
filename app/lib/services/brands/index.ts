import api from '..';
import { GetBrandsResponse } from '../../hooks/brands/index.types';

const getBrands = async () => {
  const response = await api<GetBrandsResponse>('/brand');
  return response.data;
};

export { getBrands };
