'use client';

import { ShoppingCartFullIcon } from '@/app/lib/design/common/icons';
import ImgContainer from '@/app/lib/design/common/img-container';
import StarRating from '@/app/lib/design/common/star-rating';
import Text from '@/app/lib/design/common/text';
import { useGetProductById } from '@/app/lib/hooks/product';
import { calculateDiscountedPrice } from '@/app/lib/utils/calculate-discount-price';
import { formatToIranianCurrency } from '@/app/lib/utils/curreny';
import { Button } from '@nextui-org/react';

const ProductCard = () => {
  const { data: getProduct } = useGetProductById({
    id: '67567c704ef7005ef2656b15',
  });

  const product = getProduct?.data.product;

  if (!product) return null;

  return (
    <section
      className="p-6 rounded-2xl shadow-lg bg-white flex flex-col items-center gap-5 h-[600px] max-w-sm mx-auto
                        transition-transform hover:scale-[1.03] hover:shadow-2xl duration-300"
    >
      <ImgContainer
        className="w-full h-[250px] rounded-lg object-cover"
        src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
        alt={product.name}
      />

      <Text className="text-xl font-extrabold text-center truncate">
        {product.name}
      </Text>

      <section className="flex flex-col items-center gap-1">
        <Text className="line-through text-gray-400 text-base">
          {formatToIranianCurrency(product.price, 'toman')}
        </Text>
        <Text className="text-2xl font-bold text-red-600">
          {formatToIranianCurrency(
            calculateDiscountedPrice(product.price, product.discount),
            'toman'
          )}
        </Text>
      </section>

      <StarRating rating={product.rating} size="text-2xl" className="mb-6" />

      <Button
        aria-label="add-product"
        size="lg"
        className="bg-teal-500 rounded-full px-8 py-3 text-white shadow-md hover:bg-teal-600 transition duration-300 flex items-center gap-2 justify-center"
        endContent={<ShoppingCartFullIcon />}
      >
        افزودن به سبد خرید
      </Button>
    </section>
  );
};

export default ProductCard;
