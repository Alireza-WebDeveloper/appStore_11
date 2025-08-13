// components/orders/OrdersUserFriendly.tsx
'use client';

import React, { useState } from 'react';
import { useFetchOrder } from '@/app/lib/hooks/order';
import OrderItem from './order-item';
import ShippingAddress from './shipping-address';
import OrderSummary from './order-summary';
import OrderHeader from './order-header';

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

      {userOrder.data.map((order: any) => (
        <div
          key={order._id}
          className="bg-white rounded-lg shadow-lg p-6 mb-10 border border-gray-200"
        >
          <OrderHeader
            invoiceNumber={order.invoiceNumber}
            orderDate={order.orderDate}
            status={order.status}
            paymentStatus={order.paymentStatus}
          />

          <ShippingAddress address={order.address} />

          <div className="divide-y divide-gray-200">
            {order.items.map((item: any) => (
              <OrderItem
                key={item.productId._id}
                item={item}
                isExpanded={!!expandedItems[item.productId._id]}
                toggle={() => toggleItem(item.productId._id)}
              />
            ))}
          </div>

          <OrderSummary items={order.items} totalPrice={order.totalPrice} />
        </div>
      ))}
    </div>
  );
}
