import { ProductState } from '../../hooks/product/index.types';

export interface ProfileCartState {
  productId: ProductState;
  quantity: number;
  price: number;
  _id: string;
}

export interface GetProfileCartResponse {
  data: {
    _id: string;
    items: ProfileCartState[];
    userId: string;
    totalPrice: number;
    isCheckedOut: boolean;
    createdAt: string;
    updatedAt: string;
    itemsCount: number;
  };
  error: {};
  message: string;
}
