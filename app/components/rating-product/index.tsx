'use client';
import React, { useState } from 'react';
import SectionTitle from '@/app/lib/design/common/section-title';

import { useGetCategories } from '@/app/lib/hooks/categories';
import { useGetProducts } from '@/app/lib/hooks/product';
import ProductCard from '@/app/lib/design/common/product-card';
import { Button } from '@nextui-org/react';
import Animation from '@/app/lib/design/common/animation';

const RatingProduct = () => {
  //  !! State Active
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');

  // !! Fetch Categories
  const { data: getCategories } = useGetCategories();

  // !! Fetch Fetch Product By Category Id
  const {
    data: getProducts,
    isLoading: isLoadingProduct,
    isRefetching: isRefetchingProduct,
  } = useGetProducts({
    sortby: 'rating',
    limit: 4,
    category: activeCategoryId,
  });

  return (
    <section className="flex flex-col justify-center gap-4 mt-20">
      <SectionTitle title="برترین محصولات" className="w-[70%]" />

      <div className="flex p-3 justify-evenly ">
        <Button
          aria-label="all-products"
          onPress={() => setActiveCategoryId('')}
          className={`
            px-4 py-2
          ${activeCategoryId === '' ? 'bg-purple-700 text-white' : ''}`}
        >
          همه محصولات
        </Button>
        {getCategories?.data.categories.map((category) => {
          return (
            <Button
              aria-label="btn-product"
              onPress={() => setActiveCategoryId(category._id)}
              className={`
    px-5 py-2 rounded-full transition-shadow duration-300
    ${
      activeCategoryId === category._id
        ? 'bg-purple-700 text-white shadow-lg'
        : 'bg-gray-200 text-gray-800 hover:bg-purple-100 hover:text-purple-700'
    }`}
              key={category._id}
            >
              {category.name}
            </Button>
          );
        })}
      </div>

      {isLoadingProduct || isRefetchingProduct ? (
        <div className="flex justify-center">
          <Animation />
        </div>
      ) : (
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 p-2">
          {getProducts?.data.products.map((product) => {
            return (
              <ProductCard
                product={product}
                key={product._id}
                showDiscount={false}
                showCreatedDate={false}
              />
            );
          })}
        </section>
      )}
    </section>
  );
};

export default RatingProduct;
