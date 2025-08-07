import Text from '@/app/lib/design/common/text';
import { Props } from './index.types';
import React from 'react';
import LinkContainer from '@/app/lib/design/common/link-container';

const ProductCategory: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className="flex items-center gap-2 text-gray-600">
        <Text as="span" className="text-sm">
          دسته بندی:
        </Text>
        <LinkContainer
          href={`/product?category=${product.category._id}`}
          className="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          {product.category.name}
        </LinkContainer>
      </div>
    </>
  );
};

export default ProductCategory;
