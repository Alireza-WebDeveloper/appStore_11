// components/orders/OrderHeader.tsx
import React from 'react';
import StatusBadge from './status-badge';
export default function OrderHeader({
  invoiceNumber,
  orderDate,
  status,
  paymentStatus,
}: {
  invoiceNumber?: string;
  orderDate: string;
  status: string;
  paymentStatus: string;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3 text-right">
      <div className="space-y-1">
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">شماره فاکتور:</span>{' '}
          <span className="select-all">{invoiceNumber || '---'}</span>
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">تاریخ سفارش:</span>{' '}
          {new Date(orderDate).toLocaleDateString('fa-IR')}
        </p>
      </div>

      <div className="flex gap-4 rtl flex-wrap">
        <StatusBadge
          type={status === 'پردازش شده' ? 'success' : 'warning'}
          text={`وضعیت سفارش: ${status}`}
        />
        <StatusBadge
          type={paymentStatus === 'موفق' ? 'success' : 'error'}
          text={`وضعیت پرداخت: ${paymentStatus}`}
        />
      </div>
    </div>
  );
}
