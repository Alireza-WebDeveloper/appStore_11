import React from 'react';
import CardItem from './card';
import Image1 from '@/public/images/main-ico.png';
import Image2 from '@/public/images/main-ico-2.png';
import Image3 from '@/public/images/main-ico-3.png';
const Card: React.FC = () => {
  return (
    <div className="bg-gray-100 bg-gradient-to-br  rounded p-6 w-full mt-3 flex justify-evenly flex-col sm:flex-row gap-4">
      <CardItem
        src={Image1.src}
        title="تخفیفات واقعی"
        subtitle="تا 60% تخفیف روزانه"
      />
      <CardItem
        src={Image2.src}
        title="پشتیبانی کامل"
        subtitle="پشتیبانی آنلاین 24/7"
      />
      <CardItem
        src={Image3.src}
        title="ارسال رایگان"
        subtitle="ارسال به کل کشور"
        hasBorder={false}
      />
    </div>
  );
};

export default Card;
