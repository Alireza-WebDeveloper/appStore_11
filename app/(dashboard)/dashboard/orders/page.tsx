'use client';
import { useFetchOrder } from '@/app/lib/hooks/order';
import { useState } from 'react';

import ImgContainer from '@/app/lib/design/common/img-container';

function StatusBadge({
  text,
  type,
}: {
  text: string;
  type: 'success' | 'warning' | 'error';
}) {
  const colors = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${colors[type]}`}
    >
      {text}
    </span>
  );
}

export default function OrdersUserFriendly() {
  const { data: userOrder } = useFetchOrder();
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!userOrder || userOrder.data.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8 rtl font-sans">
        <h1 className="text-4xl font-extrabold mb-8 border-b border-gray-300 pb-4">
          سفارش‌های من
        </h1>
        <p className="text-center text-gray-600 text-lg">
          شما هیچ سفارشی ندارید.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 rtl font-sans">
      <h1 className="text-4xl font-extrabold mb-8 border-b border-gray-300 pb-4">
        سفارش‌های من
      </h1>

      {userOrder.data.map((order) => (
        <div
          key={order._id}
          className="bg-white rounded-lg shadow-lg p-6 mb-10 border border-gray-200"
        >
          {/* هدر سفارش */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3 text-right">
            <div className="space-y-1">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">شماره فاکتور:</span>{' '}
                <span className="select-all">
                  {order.invoiceNumber || '---'}
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">تاریخ سفارش:</span>{' '}
                {new Date(order.orderDate).toLocaleDateString('fa-IR')}
              </p>
            </div>

            <div className="flex gap-4 rtl flex-wrap">
              <StatusBadge
                type={order.status === 'پردازش شده' ? 'success' : 'warning'}
                text={`وضعیت سفارش: ${order.status}`}
              />
              <StatusBadge
                type={order.paymentStatus === 'موفق' ? 'success' : 'error'}
                text={`وضعیت پرداخت: ${order.paymentStatus}`}
              />
            </div>
          </div>

          {/* آدرس ارسال */}
          <div className="mb-6 text-right">
            <h3 className="text-lg font-semibold mb-2">آدرس ارسال</h3>
            {Object.entries(order.address).map(([key, value]) => (
              <p key={key}>
                <span className="font-semibold capitalize">{key}:</span> {value}
              </p>
            ))}
          </div>

          {/* لیست محصولات */}
          <div className="divide-y divide-gray-200">
            {order.items.map(({ productId, quantity, price }) => {
              // حساب قیمت تخفیف‌خورده
              const discountedPrice = productId.discount
                ? Math.round(productId.price * (1 - productId.discount / 100))
                : productId.price;

              return (
                <div
                  key={productId._id}
                  className="flex flex-col md:flex-row gap-6 py-6 text-right"
                >
                  {/* تصویر محصول */}
                  <div className="flex-shrink-0 relative rounded-md overflow-hidden border border-gray-300 shadow-sm">
                    <ImgContainer
                      src={`${process.env.NEXT_PUBLIC_API_IMG}${productId.image}`}
                      alt={productId.name}
                      className="object-cover w-28 h-28"
                    />
                  </div>

                  {/* جزئیات محصول */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-1">
                      {productId.name}
                    </h2>

                    {/* قیمت و تخفیف */}
                    <div className="flex items-center gap-4 mb-2">
                      {productId.discount ? (
                        <>
                          <span className="text-red-600 font-bold text-lg">
                            {discountedPrice.toLocaleString()} تومان
                          </span>
                          <span className="line-through text-gray-400 text-sm">
                            {productId.price.toLocaleString()} تومان
                          </span>
                          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">
                            %{productId.discount} تخفیف
                          </span>
                        </>
                      ) : (
                        <span className="font-bold text-lg">
                          {productId.price.toLocaleString()} تومان
                        </span>
                      )}
                    </div>

                    <p className="mb-2 text-gray-600">تعداد: {quantity}</p>

                    {/* دکمه نمایش/پنهان مشخصات فنی */}
                    <button
                      onClick={() => toggleItem(productId._id)}
                      className="flex items-center gap-2 text-primary font-semibold hover:underline focus:outline-none"
                    >
                      جزییات بیشتر
                      {/* می‌تونی آیکون اینجا اضافه کنی */}
                    </button>

                    {/* مشخصات فنی - آکاردئون */}
                    {expandedItems[productId._id] && (
                      <div className="mt-3 p-3 border rounded-md bg-gray-50 text-gray-700 text-sm space-y-1">
                        {productId.technicalSpecifications.map((spec) => (
                          <div key={spec._id} className="flex justify-between">
                            <span className="font-semibold">{spec.key}</span>
                            <span>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* قیمت کل محصول */}
                  <div className="flex items-center justify-end md:w-32 font-bold text-gray-900 text-lg">
                    {(discountedPrice * quantity).toLocaleString()} تومان
                  </div>
                </div>
              );
            })}
          </div>

          {/* خلاصه مالی */}
          <div className="mt-8 text-right text-gray-700 border-t border-gray-300 pt-4 max-w-md mx-auto">
            <div className="flex justify-between mb-2">
              <span>جمع قیمت محصولات:</span>
              <span>
                {order.items
                  .reduce((acc, i) => {
                    const price = i.productId.discount
                      ? Math.round(
                          i.productId.price * (1 - i.productId.discount / 100)
                        )
                      : i.productId.price;
                    return acc + i.quantity * price;
                  }, 0)
                  .toLocaleString()}{' '}
                تومان
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>تخفیف کل:</span>
              <span className="text-red-600">
                {/* اگر داری مقدار تخفیف کل رو از سرور بگیر و اینجا استفاده کن */}
                0 تومان
              </span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>مبلغ نهایی:</span>
              <span>{order.totalPrice.toLocaleString()} تومان</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
