import Text from '@/app/lib/design/common/text';
import Title from '@/app/lib/design/common/title';
import React from 'react';
import { Props } from './index.types';

const ProductStock: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className="mt-4 bg-gray-100 p-4 rounded-md border border-gray-300 shadow-md text-center">
        <Title level={3} className="text-lg font-bold text-gray-800 mb-2">
          موجودی انبار
        </Title>
        <Text
          size="md"
          className={`text-md ${
            product?.stock && product?.stock > 0
              ? 'text-green-600'
              : 'text-red-600'
          }`}
        >
          {product?.stock && product?.stock > 0
            ? `${product?.stock} عدد موجود است`
            : 'ناموجود'}
        </Text>
      </div>
    </>
  );
};

export default ProductStock;
