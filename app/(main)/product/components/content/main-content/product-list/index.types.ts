import {
  GetProductsResponse,
  ProductState,
} from '@/app/lib/hooks/product/index.types';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query';

export interface ProductListProps {
  products: ProductState[];
  refetchProduct: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<GetProductsResponse, unknown>>;
}
