'use client';

import React from 'react';
import ImgContainer from '@/app/lib/design/common/img-container';
import Image from '@/public/images/slider-img-1-2-min.png';
import Title from '@/app/lib/design/common/title';
import Text from '@/app/lib/design/common/text';
import { Button } from '@nextui-org/react';

const products = [
  {
    id: 1,
    name: 'تلویزیون هوشمند',
    subtitle: '۴K UHD',
    description: 'کیفیت تصویر بی‌نظیر',
    bg: 'bg-blue-100/50',
    textColor: 'text-blue-900',
    btnBg: 'bg-blue-200',
    btnHover: 'hover:bg-blue-300',
  },
  {
    id: 2,
    name: 'یخچال فریزر',
    subtitle: '۶۰۰ لیتری',
    description: 'صرفه‌جویی در انرژی',
    bg: 'bg-green-100/50',
    textColor: 'text-green-900',
    btnBg: 'bg-green-200',
    btnHover: 'hover:bg-green-300',
  },
  {
    id: 3,
    name: 'جاروبرقی رباتیک',
    subtitle: 'تکنولوژی پیشرفته',
    description: 'خانه‌ای تمیز بدون زحمت',
    bg: 'bg-pink-100/50',
    textColor: 'text-pink-900',
    btnBg: 'bg-pink-200',
    btnHover: 'hover:bg-pink-300',
  },
  {
    id: 4,
    name: 'ماشین لباسشویی',
    subtitle: '۱۰ کیلوگرم',
    description: 'شستشوی سریع و موثر',
    bg: 'bg-yellow-100/50',
    textColor: 'text-yellow-900',
    btnBg: 'bg-yellow-200',
    btnHover: 'hover:bg-yellow-300',
  },
];

const OverviewProduct = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-white/30 backdrop-blur-lg rounded-3xl shadow-md">
      {products.map(
        ({
          id,
          name,
          subtitle,
          description,
          bg,
          textColor,
          btnBg,
          btnHover,
        }) => (
          <section
            key={id}
            className={`${bg} backdrop-blur-md rounded-2xl border border-white/30
          p-6 flex flex-col items-center text-center shadow-md
          hover:scale-[1.05] transition-transform duration-400 ease-in-out cursor-pointer`}
          >
            <ImgContainer
              src={Image.src}
              className="w-36 h-36 rounded-xl shadow-lg object-contain mb-5"
            />
            <Title level={4} className={`${textColor} font-semibold mb-1`}>
              {name}
            </Title>
            <Title level={6} className={`${textColor} font-medium mb-3`}>
              {subtitle}
            </Title>
            <Text as="p" className={`${textColor} mb-6 max-w-xs`}>
              {description}
            </Text>
            <Button
              aria-label={`خرید محصول ${name}`}
              className={`${btnBg} ${textColor} font-semibold rounded-full px-8 py-3
              shadow-sm transition-colors duration-300 ${btnHover}`}
              type="button"
              variant="flat"
            >
              خرید
            </Button>
          </section>
        )
      )}
    </div>
  );
};

export default OverviewProduct;
