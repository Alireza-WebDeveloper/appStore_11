// components/orders/OrderItem.tsx
import React from 'react';
import ImgContainer from '@/app/lib/design/common/img-container';
import { OrderItemType } from '@/app/lib/hooks/order/index.types';

export default function OrderItem({
  item,
  isExpanded,
  toggle,
}: {
  item: OrderItemType;
  isExpanded: boolean;
  toggle: () => void;
}) {
  const discountedPrice = item.productId.discount
    ? Math.round(item.productId.price * (1 - item.productId.discount / 100))
    : item.productId.price;

  return (
    <div
      key={item.productId._id}
      className="flex flex-col md:flex-row gap-6 py-6 text-right"
    >
      <div className="flex-shrink-0 relative rounded-md overflow-hidden border border-gray-300 shadow-sm">
        <ImgContainer
          src={`${process.env.NEXT_PUBLIC_API_IMG}${item.productId.image}`}
          alt={item.productId.name}
          className="object-cover w-28 h-28"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-1">{item.productId.name}</h2>

        <div className="flex items-center gap-4 mb-2">
          {item.productId.discount ? (
            <>
              <span className="text-red-600 font-bold text-lg">
                {discountedPrice.toLocaleString()} تومان
              </span>
              <span className="line-through text-gray-400 text-sm">
                {item.productId.price.toLocaleString()} تومان
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">
                %{item.productId.discount} تخفیف
              </span>
            </>
          ) : (
            <span className="font-bold text-lg">
              {item.productId.price.toLocaleString()} تومان
            </span>
          )}
        </div>

        <p className="mb-2 text-gray-600">تعداد: {item.quantity}</p>

        <button
          onClick={toggle}
          className="flex items-center gap-2 text-primary font-semibold hover:underline focus:outline-none"
        >
          جزییات بیشتر
        </button>

        {isExpanded && (
          <div className="mt-3 p-3 border rounded-md bg-gray-50 text-gray-700 text-sm space-y-1">
            {item.productId.technicalSpecifications.map((spec: any) => (
              <div key={spec._id} className="flex justify-between">
                <span className="font-semibold">{spec.key}</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-end md:w-32 font-bold text-gray-900 text-lg">
        {(discountedPrice * item.quantity).toLocaleString()} تومان
      </div>
    </div>
  );
}
