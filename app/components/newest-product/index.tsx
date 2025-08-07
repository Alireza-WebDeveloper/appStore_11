'use client';
import React from 'react';
import SectionTitle from '@/app/lib/design/common/section-title';
import { useGetProducts } from '@/app/lib/hooks/product';
import ProductCard from '@/app/lib/design/common/product-card';

const NewestProduct = () => {
  //  !! Fetch Newest Product
  const { data: getProducts } = useGetProducts({ sortby: 'newest', limit: 4 });
  return (
    <section className="flex flex-col gap-4 mt-20">
      <SectionTitle title="جدیدترین محصولات" />

      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 p-2">
        {getProducts?.data.products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              showRating={false}
              showDiscount={false}
            />
          );
        })}
      </section>
    </section>
  );
};

export default NewestProduct;
