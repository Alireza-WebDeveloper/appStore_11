import React from 'react';
import { Props } from './index.types';
import ImgContainer from '@/app/lib/design/common/img-container';

const ProductImageGallery: React.FC<Props> = ({ product }) => {
  return (
    <>
      {Array(4)
        .fill(product.image)
        .map((img, index) => (
          <ImgContainer
            key={index}
            className="w-40 h-40 object-cover border rounded-md cursor-pointer hover:border-blue-500 transition-colors duration-300"
            src={`${process.env.NEXT_PUBLIC_API_IMG}${img}`}
          />
        ))}
    </>
  );
};

export default ProductImageGallery;
