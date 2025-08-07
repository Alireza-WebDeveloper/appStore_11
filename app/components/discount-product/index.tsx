'use client';
import React from 'react';
import SectionTitle from '@/app/lib/design/common/section-title';
import { useGetProducts } from '@/app/lib/hooks/product';
import ProductCard from '@/app/lib/design/common/product-card';

const DiscountProduct: React.FC<Props> = () => {
  const { data: getProducts } = useGetProducts({
    sortby: 'discounted',
    limit: 4,
  });
  return (
    <section className="flex flex-col gap-4 mt-20">
      <SectionTitle title="محصولات تخفیف" />

      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 p-2">
        {getProducts?.data.products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product._id}
              showRating={false}
              showCreatedDate={false}
            />
          );
        })}
      </section>
    </section>
  );
};

export default DiscountProduct;
