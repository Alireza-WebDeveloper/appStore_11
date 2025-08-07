'use client';

import React from 'react';
import { BrandsItemProps } from './index.types';
import ImgContainer from '@/app/lib/design/common/img-container';
import Text from '@/app/lib/design/common/text';
import LinkContainer from '@/app/lib/design/common/link-container';

const BrandItem: React.FC<BrandsItemProps> = ({ item }) => {
  return (
    <LinkContainer
      href={`/product?brand=${item._id}`}
      className="
        relative cursor-pointer px-5 py-4 flex flex-col items-center justify-center
        bg-white bg-opacity-90 rounded-2xl shadow-md
        hover:bg-opacity-100 hover:shadow-xl
        transition duration-300 transform hover:-translate-y-1 hover:scale-105
        border border-transparent hover:border-primary
      "
      aria-label={`نمایش محصولات برند ${item.name}`}
    >
      <ImgContainer
        src={`${process.env.NEXT_PUBLIC_API_IMG}${item.image}`}
        alt={item.name}
        className="w-24 h-24 object-contain mb-2"
      />
      <Text
        className="
          text-gray-800 font-semibold text-base
          transition-colors duration-300 hover:text-primary
          text-center
          truncate max-w-full
        "
      >
        {item.name}
      </Text>
    </LinkContainer>
  );
};

export default BrandItem;
