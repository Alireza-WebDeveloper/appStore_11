import { BrandState } from '../brands/index.types';
import { CategoriesState } from '../categories/index.types';

// !! State
export type SortByFilterState =
  | 'rating'
  | 'sales'
  | 'stock'
  | 'newest'
  | 'discounted';

// !! Props
export interface GetProductProps {
  category?: string;
  page?: number;
  limit?: number;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  sortby?: SortByFilterState;
  brand?: string;
}

export interface GetProductByIdProps {
  id: string;
}

export interface GetProductsProps {
  params: Partial<{
    sortby: 'rating' | 'sales' | 'stock' | 'newest' | 'discounted';
    limit: number;
    page: number;
    maxPrice: number;
    minPrice: number;
    search: string;
    category: string;
  }>;
}

export interface GetProductByIdResponse {
  data: {
    product: ProductState;
  };
  error: any;
  message: string;
}

// !! Response
export interface GetProductsResponse {
  data: {
    totalProducts: number;
    totalPages: number;
    currentPage: number;
    products: ProductState[];
  };
  error: any;
  message: string;
}

// !! State
export interface TechnicalSpecificationsState {
  key: string;
  value: string;
  _id: string;
}

export interface ProductState {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: CategoriesState;
  stock: number;
  discount: number;
  rating: number;
  image: string;
  brand: BrandState;
  sales: number;
  createdAt: string;
  updatedAt: string;
  technicalSpecifications: TechnicalSpecificationsState[];
  likesCount: number;
}
