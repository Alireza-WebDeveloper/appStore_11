// components/orders/OrderSummary.tsx
import { OrderItemType } from '@/app/lib/hooks/order/index.types';
import React from 'react';

export default function OrderSummary({
  items,
  totalPrice,
}: {
  items: OrderItemType[];
  totalPrice: number;
}) {
  const totalProductsPrice = items.reduce((acc, i) => {
    const price = i.productId.discount
      ? Math.round(i.productId.price * (1 - i.productId.discount / 100))
      : i.productId.price;
    return acc + i.quantity * price;
  }, 0);

  return (
    <div className="mt-8 text-right text-gray-700 border-t border-gray-300 pt-4 max-w-md mx-auto">
      <div className="flex justify-between mb-2">
        <span>جمع قیمت محصولات:</span>
        <span>{totalProductsPrice.toLocaleString()} تومان</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>تخفیف کل:</span>
        <span className="text-red-600">0 تومان</span>
      </div>
      <div className="flex justify-between font-bold text-lg border-t pt-2">
        <span>مبلغ نهایی:</span>
        <span>{totalPrice.toLocaleString()} تومان</span>
      </div>
    </div>
  );
}
