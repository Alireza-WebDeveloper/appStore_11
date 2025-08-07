import React, { useState } from 'react';
import ImgContainer from '@/app/lib/design/common/img-container';
import Text from '@/app/lib/design/common/text';
import StarRating from '@/app/lib/design/common/star-rating';

import { calculateDiscountedPrice } from '@/app/lib/utils/calculate-discount-price';
import { ConvertDateFormat } from '@/app/lib/utils/date.format';

import { cn } from '@/app/lib/utils/cn';
import { Button } from '@nextui-org/react';
import { formatToIranianCurrency } from '@/app/lib/utils/curreny';

import LinkContainer from '../link-container';
import { LikeEmptyIcon, LikeFillIcon } from '../icons';
import { useFetchProfile } from '@/app/lib/hooks/auth';

import toast from 'react-hot-toast';
import {
  useAddLikesUser,
  useGetLikesUser,
  useRemoveLikesUser,
} from '@/app/lib/hooks/like';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from '@tanstack/react-query';
import {
  GetProductsResponse,
  ProductState,
} from '@/app/lib/hooks/product/index.types';
import { useToastify } from '@/app/lib/hooks/global/toast-notify';

interface ProductCardProps {
  product: ProductState;
  showDescription?: boolean;
  showRating?: boolean;
  showDiscount?: boolean;
  showCreatedDate?: boolean;
  showLikes?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  parentClassName?: string;
  imgClassName?: string;
  imgLink?: string;
  refetchProduct?: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<GetProductsResponse, unknown>>;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showDescription = true,
  showRating = true,
  showDiscount = true,
  showCreatedDate = true,
  showLikes = false,
  buttonLabel = 'مشاهده محصول',
  onButtonClick,
  parentClassName,
  imgClassName,
  imgLink = `/product/${product._id}`,
  refetchProduct,
}) => {
  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discount
  );

  const [likesCount, setLikesCount] = useState(product.likesCount);

  const { data: profile } = useFetchProfile();

  const { data: likesUser, refetch: refetchLikesUser } = useGetLikesUser({
    isActive: profile?.user ? true : false,
  });

  const { OpenToastify } = useToastify();

  const checkLikeUser = likesUser?.data.find(
    ({ productId: { _id } }) => _id === product._id
  );

  const { mutate: addLikesUserMutate } = useAddLikesUser();
  const { mutate: removeLikesUserMutate } = useRemoveLikesUser();

  const handleLikeUser = () => {
    if (checkLikeUser) {
      removeLikesUserMutate(
        { productId: product._id },
        {
          onSuccess: (response) => {
            OpenToastify(response.message, 'success');
            refetchProduct && refetchProduct();
            refetchLikesUser();
            // setLikesCount((prev) => prev - 1);
          },
          onError: () => {},
        }
      );
    } else {
      addLikesUserMutate(
        { productId: product._id },
        {
          onSuccess: (response) => {
            OpenToastify(response.message, 'success');
            refetchProduct && refetchProduct();
            refetchLikesUser();
            // setLikesCount((prev) => prev + 1);
          },
          onError: () => {},
        }
      );
    }
  };

  return (
    <div
      className={cn(
        'rounded-xl shadow-lg border border-gray-200 relative flex flex-col gap-4 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl',
        parentClassName
      )}
    >
      <LinkContainer href={imgLink} className="relative">
        <ImgContainer
          className={cn(
            'h-60 w-60 rounded-t-x mx-auto object-fill',
            imgClassName
          )}
          src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
        />
      </LinkContainer>
      <div className="flex flex-col items-start px-2 gap-3">
        <Text className="font-semibold text-gray-800">{product.name}</Text>
        {showDescription && (
          <Text className="text-sm text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100%]">
            {product.description ||
              'محصولاتی با کیفیت بالا و ویژگی‌های منحصر به فرد که تجربه‌ای عالی برای شما به ارمغان می‌آورند'}
          </Text>
        )}
        {showCreatedDate && (
          <Text className="text-sm mt-2 text-gray-500">
            محصول جدید از تاریخ : {ConvertDateFormat(product.createdAt, 'fa')}
          </Text>
        )}
      </div>
      {showRating && (
        <div className="flex items-center">
          <span className="text-sm mr-2 text-blue-500 font-semibold">
            امتیاز مشتریان:
          </span>
          <StarRating rating={product.rating} className="px-2" size="text-lg" />
        </div>
      )}

      {showLikes && (
        <div
          className="flex absolute top-4 right-4 items-center bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-80 rounded-full shadow-md px-3 py-1 cursor-pointer select-none
                 transition-all duration-300 hover:bg-red-100 dark:hover:bg-red-900"
          onClick={() => {
            profile?.user
              ? handleLikeUser()
              : OpenToastify('نیاز به وورد کاربری', 'error');
          }}
          role="button"
        >
          {checkLikeUser ? <LikeFillIcon /> : <LikeEmptyIcon />}
          <span className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300 select-none">
            {/* {likesCount} */}
            {product.likesCount}
          </span>
        </div>
      )}

      <div className="flex justify-between items-center px-2">
        <div className="flex flex-col">
          {showDiscount && product.discount > 0 && (
            <div className="flex items-center space-x-2">
              <Text className="text-sm text-gray-400 line-through">
                {formatToIranianCurrency(product.price, 'toman')}
              </Text>
              <Text className="text-sm text-red-500 font-semibold">
                {product.discount}% تخفیف خورده
              </Text>
            </div>
          )}
          <Text
            className={`text-lg font-bold ${
              product.discount > 0 ? 'text-teal-500' : 'text-red-500'
            }`}
          >
            {formatToIranianCurrency(discountedPrice, 'toman')}
          </Text>
        </div>
      </div>
      <Button
        aria-label="btn-product"
        variant="shadow"
        className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600"
        onClickCapture={onButtonClick}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default ProductCard;
