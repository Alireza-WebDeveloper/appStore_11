import api from '..';
import { GetFiltersProps, GetFiltersResponse } from '../../hooks/filter/index.types';
import { createParams } from '../../utils/create-params';
 

const getFilter = async (params: GetFiltersProps) => {
  const createQueryStringfield = createParams(params);
  const response = await api.get<GetFiltersResponse>(
    `/filters?${createQueryStringfield}`
  );
  return response.data;
};

export { getFilter };
