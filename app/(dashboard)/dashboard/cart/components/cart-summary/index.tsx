'use client';

import React from 'react';
import { Button } from '@nextui-org/react';

import { ShoppingCartFullIcon, TrashIcon } from '@/app/lib/design/common/icons';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query';
import { GetProfileCartResponse } from '@/app/lib/services/types/cart';
import { useRemoveAllProductOfCart } from '@/app/lib/hooks/cart';

interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<GetProfileCartResponse, unknown>>;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  totalItems,
  totalPrice,
  refetch,
}) => {
  const { mutate: removeAllProduct } = useRemoveAllProductOfCart();
  return (
    <div className="rounded-xl shadow-md bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-4 border">
      {/* اطلاعات تعداد و مبلغ */}
      <div className="space-y-1 text-right w-full md:w-auto">
        <div className="flex items-center justify-end gap-2 text-sm text-gray-600">
          <ShoppingCartFullIcon />
          <span>تعداد کالاها:</span>
          <span className="font-bold text-black">{totalItems}</span>
        </div>
        <div className="text-xl font-extrabold text-green-600">
          مبلغ کل: {totalPrice.toLocaleString()} تومان
        </div>
      </div>

      {/* دکمه‌ها */}
      <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
        <Button
          onPress={() => removeAllProduct()}
          startContent={<TrashIcon color="gray" />}
          color="danger"
          variant="light"
          className="w-full sm:w-auto"
        >
          حذف کل سبد
        </Button>
        <Button
          onPress={() => refetch()}
          color="primary"
          className="w-full sm:w-auto"
        >
          بروزرسانی سبد خرید
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
