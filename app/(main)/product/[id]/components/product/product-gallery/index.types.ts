 
import { ProductState } from '@/app/lib/hooks/product/index.types';
import { ClassNameType } from '@/app/lib/types/classname';

export interface Props extends ClassNameType {
  product: ProductState;
}
