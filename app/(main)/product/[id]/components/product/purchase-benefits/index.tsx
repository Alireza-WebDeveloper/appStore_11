import React from 'react';
import { Props } from './index.types';
import Title from '@/app/lib/design/common/title';

const PurchaseBenefits: React.FC<Props> = () => {
  return (
    <>
      <div className="mt-10 bg-gray-100 p-6 rounded-md border border-gray-300 shadow-md w-full">
        <Title level={1} className="text-lg font-bold text-gray-800 mb-3">
          چرا از ما خرید کنید؟
        </Title>
        <ul className="text-sm text-gray-600 list-disc pl-5 gap-2 flex flex-col">
          <li>۷ روز ضمانت بازگشت کالا</li>
          <li>ارسال سریع به تمام نقاط کشور</li>
          <li>پرداخت امن و آسان</li>
          <li>پشتیبانی ۲۴ ساعته در ۷ روز هفته</li>
        </ul>
      </div>
    </>
  );
};

export default PurchaseBenefits;
