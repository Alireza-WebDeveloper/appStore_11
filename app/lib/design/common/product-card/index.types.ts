import { ProductState } from "@/app/lib/hooks/product/index.types";

 

export interface ProductProps {
  product: ProductState;
  isActivePrice?: boolean;
}
