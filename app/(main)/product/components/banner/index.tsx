'use client';
import SectionSlider from '@/app/lib/design/common/section-slider';
import { SwiperSlide } from 'swiper/react';
import ImgContainer from '@/app/lib/design/common/img-container';

import Image1 from '@/public/images/banner/1.jpg';
import Image2 from '@/public/images/banner/2.jpg';
import Image3 from '@/public/images/banner/3.jpg';
import Image4 from '@/public/images/banner/4.jpg';

import BannerItem from './banner-item';

const bannerItems = [
  {
    id: '1',
    title: 'خنکی هوشمند، مصرف بهینه',
    description:
      'کولرهای گازی نسل جدید با عملکرد قدرتمند و مصرف برق پایین – انتخابی ایده‌آل برای تابستان‌های داغ!',
    src: Image1.src,
  },
  {
    id: '2',
    title: 'لباس تمیز، بدون دردسر',
    description:
      'لباسشویی‌هایی با شست‌وشوی سریع، بی‌صدا و کم‌مصرف – همراه همیشگی خانواده‌های پرمشغله.',
    src: Image2.src,
  },
  {
    id: '3',
    title: 'تازگی همیشه در دسترس',
    description:
      'یخچال و فریزرهای هوشمند با طراحی مدرن، فضای جادار و حفظ تازگی مواد غذایی برای مدت طولانی.',
    src: Image3.src,
  },
  {
    id: '4',
    title: 'آشپزی سریع، سبک زندگی مدرن',
    description:
      'مایکروویوهای جدید با عملکرد چندکاره برای گرم‌کردن، گریل و پخت آسان – در وقتت صرفه‌جویی کن!',
    src: Image4.src,
  },
];

const Banner = () => {
  return (
    <div className="w-full">
      <SectionSlider
        breakpoints={{}}
        slidesPerView={1}
        spaceBetween={20}
        autoplayDelay={3000}
      >
        {bannerItems.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <BannerItem item={banner} />
            </SwiperSlide>
          );
        })}
      </SectionSlider>
    </div>
  );
};

export default Banner;
