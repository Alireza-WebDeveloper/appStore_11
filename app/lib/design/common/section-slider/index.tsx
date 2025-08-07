'use client';
import React from 'react';
import { Swiper } from 'swiper/react';
import { cn } from '@/app/lib/utils/cn';
import { Props } from './index.types';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface SectionSliderProps extends Props {
  slidesPerView?: number;
  spaceBetween?: number;
  autoplayDelay?: number;
  className?: string;
  enableNavigation?: boolean;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      [key: string]: any;
    };
  };
}

const SectionSlider: React.FC<SectionSliderProps> = ({
  slidesPerView = 5,
  spaceBetween = 15,
  autoplayDelay = 1800,
  className = '',
  children,
  enableNavigation = true,
  breakpoints = {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
}) => {
  return (
    <>
      <section>
        <Swiper
          style={{ cursor: 'pointer' }}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          autoplay={{
            delay: autoplayDelay,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          loop
          navigation={enableNavigation}
          className={cn(`mySwiper`, className)}
          breakpoints={breakpoints}
        >
          {children}
        </Swiper>
      </section>
    </>
  );
};

export default SectionSlider;
