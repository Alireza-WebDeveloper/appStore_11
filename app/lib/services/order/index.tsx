import api from '..';
import { GetResponseOrderDataType } from '../../hooks/order/index.types';

const getOrder = async () => {
  const response = await api.get<GetResponseOrderDataType>('/orders');
  return response.data;
};

export { getOrder };
