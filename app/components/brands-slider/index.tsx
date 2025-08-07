'use client';

import { useGetBrands } from '@/app/lib/hooks/brands';
import React from 'react';
import BrandItem from './brand-item';
import SectionSlider from '@/app/lib/design/common/section-slider';
import { SwiperSlide } from 'swiper/react';
const BrandSlider = () => {
  // !! Fetch Brands
  const { data: getBrands } = useGetBrands();

  return (
    <div>
      {/* <div className="grid grid-cols-5 gap-4">
        {getBrands?.data.map((brand) => {
          return <BrandItem key={brand._id} item={brand} />;
        })}
      </div> */}
      {getBrands && (
        <SectionSlider slidesPerView={6} spaceBetween={20} autoplayDelay={2000}>
          {getBrands.data.map((brand) => {
            return (
              <SwiperSlide key={brand._id}>
                <BrandItem item={brand} key={brand._id} />
              </SwiperSlide>
            );
          })}
        </SectionSlider>
      )}
    </div>
  );
};

export default BrandSlider;
