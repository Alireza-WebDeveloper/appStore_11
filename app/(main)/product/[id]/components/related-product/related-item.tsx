import React from 'react';
import ImgContainer from '@/app/lib/design/common/img-container';
import Text from '@/app/lib/design/common/text';

import { calculateDiscountedPrice } from '@/app/lib/utils/calculate-discount-price';
import { RelatedItemProps } from './index.types';
import LinkContainer from '@/app/lib/design/common/link-container';
import { Button } from '@nextui-org/react';
import { formatToIranianCurrency } from '@/app/lib/utils/curreny';

const RelatedItem: React.FC<RelatedItemProps> = ({ product }) => {
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discount
  );
  return (
    <div className="rounded-xl shadow-lg border border-gray-200 flex flex-col gap-4 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <LinkContainer href={`/product/${product._id}`}>
        <ImgContainer
          className="w-[150px] h-[150px] mx-auto rounded-t-xl overflow-hidden"
          src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
        />
      </LinkContainer>
      <div className="flex flex-col items-start px-2 gap-3">
        <Text size="sm" className=" font-semibold text-gray-800">
          {product.name}
        </Text>
        <Text
          size="sm"
          className=" text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100%]"
        >
          {product.description ||
            'محصولاتی با کیفیت بالا و ویژگی‌های منحصر به فرد که تجربه‌ای عالی برای شما به ارمغان می‌آورند'}
        </Text>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          {product.discount > 0 && (
            <div className="flex items-center gap-2">
              <Text className="text-sm text-gray-400 line-through">
                {product.price.toLocaleString()}
              </Text>
              <Text className="text-sm text-red-500 font-semibold">
                {product.discount}% تخفیف خورده
              </Text>
            </div>
          )}

          <Text
            className={`text-sm font-bold ${
              product.discount > 0 ? 'text-teal-500' : 'text-red-500'
            }`}
          >
            {formatToIranianCurrency(discountedPrice, 'toman')} تومان
          </Text>
        </div>
        <Button  aria-label="product-buy" className="text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600">
          خرید محصول
        </Button>
      </div>
    </div>
  );
};

export default RelatedItem;
