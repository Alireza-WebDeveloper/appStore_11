import React from 'react';

import ProductCard from '@/app/lib/design/common/product-card';
import { ProductListProps } from './index.types';

const ProductList: React.FC<ProductListProps> = ({
  products,
  refetchProduct,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {products.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product._id}
            refetchProduct={refetchProduct}
            showLikes={true}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
