import React from 'react';

import { ProfileCartState } from '@/app/lib/services/types/cart';

import {
  NegativeIcon,
  PlusIcon,
  TrashIcon,
} from '@/app/lib/design/common/icons';
import ImgContainer from '@/app/lib/design/common/img-container';
import {
  useRemoveProductOfCart,
  useUpdateProductOfCart,
} from '@/app/lib/hooks/cart';
import { formatToIranianCurrency } from '@/app/lib/utils/curreny';
import { calculateDiscountedPrice } from '@/app/lib/utils/calculate-discount-price';

export interface Props {
  item: ProfileCartState;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { mutate: removeProductCart } = useRemoveProductOfCart();

  const { mutate: updateProduct } = useUpdateProductOfCart();

  const handleRemoveProduct = () => {
    removeProductCart({ productId: item.productId._id });
  };

  const handleUpdateProduct = (quantity: number) => {
    if (item.quantity === 1 && quantity === -1) return;

    updateProduct({
      quantity: item.quantity + quantity,
      productId: item.productId._id,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-md">
      {/* تصویر و عنوان محصول */}
      <div className="flex items-center gap-4 w-full">
        <ImgContainer
          src={`${process.env.NEXT_PUBLIC_API_IMG}${item.productId.image}`}
          className="w-36 h-36 sm:w-52 sm:h-52"
        />
        <div className="flex flex-col gap-1 text-right">
          {/* Product Name */}
          <span className="font-semibold text-base">{item.productId.name}</span>
          <span className="text-sm text-gray-500">{item.productId.name}</span>
        </div>
      </div>

      {/* کنترل تعداد */}
      <div className="flex items-center gap-2 self-end sm:self-auto">
        <button
          onClick={() => handleUpdateProduct(-1)}
          className="p-2 border rounded-full hover:bg-gray-100 transition"
        >
          <NegativeIcon width={20} height={20} />
        </button>
        {/* تعداد */}
        <span className="w-6 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => handleUpdateProduct(1)}
          className="p-2 border rounded-full hover:bg-gray-100 transition"
        >
          <PlusIcon width={20} height={20} />
        </button>
      </div>

      {/* قیمت */}
      <div className="text-right min-w-[120px] space-y-1">
        <div className="text-sm text-gray-400 line-through">
          {formatToIranianCurrency(item.productId.price)}
        </div>

        <div className="text-green-600 font-bold text-md">
          {formatToIranianCurrency(calculateDiscountedPrice(
            item.productId.price,
            item.productId.discount
          ))}
        </div>
      </div>

      <button
        onClick={handleRemoveProduct}
        className="text-red-500 hover:text-red-700 self-end sm:self-auto"
      >
        <TrashIcon width={20} height={20} color="gray" />
      </button>
    </div>
  );
};

export default CartItem;
