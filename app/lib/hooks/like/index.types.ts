import { ProductState } from "../product/index.types";


export interface GetLikesUserResponse {
  data: {
    _id: string;
    productId: ProductState;
    createdAt: string;
    updatedAt: string;
  }[];
  error: null;
  message: number;
}

export interface LikesUserProps {
  productId: string;
}
