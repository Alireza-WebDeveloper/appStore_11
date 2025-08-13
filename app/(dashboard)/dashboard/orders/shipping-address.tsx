// components/orders/ShippingAddress.tsx
import React from 'react';

export default function ShippingAddress({
  address,
}: {
  address: Record<string, string>;
}) {
  return (
    <div className="mb-6 text-right">
      <h3 className="text-lg font-semibold mb-2">آدرس ارسال</h3>
      {Object.entries(address).map(([key, value]) => (
        <p key={key}>
          <span className="font-semibold capitalize">{key}:</span> {value}
        </p>
      ))}
    </div>
  );
}
