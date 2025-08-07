'use client';

import {
  LikeEmptyIcon,
  LikeFillIcon,
  ShoppingCartFullIcon,
} from '@/app/lib/design/common/icons';
import ImgContainer from '@/app/lib/design/common/img-container';
import { useGetProductById } from '@/app/lib/hooks/product';
import { Button } from '@nextui-org/react';
import { useParams } from 'next/navigation';
import ProductImageGallery from './product-gallery';
import PurchaseBenefits from './purchase-benefits';
import DiscountBanner from './discount-banner';
import Title from '@/app/lib/design/common/title';
import ProductCategory from './product-category';
import Text from '@/app/lib/design/common/text';
import ProductPrice from './product-price';
import ProductStock from './product-stock';
import Cart from './cart';
import {
  useAddLikesUser,
  useGetLikesUser,
  useRemoveLikesUser,
} from '@/app/lib/hooks/like';
import { useFetchProfile } from '@/app/lib/hooks/auth';
import toast from 'react-hot-toast';
import { useToastify } from '@/app/lib/hooks/global/toast-notify';

const Product = () => {
  // !! Fetch Product By Id
  const param = useParams();
  const id = param.id;

  const { data, refetch: refetchProduct } = useGetProductById({
    id: String(id),
  });
  const product = data?.data.product;

  const { data: profile } = useFetchProfile();

  const { data: likesUser, refetch: refetchLikesUser } = useGetLikesUser({
    isActive: profile?.user ? true : false,
  });

  const checkLikeUser = likesUser?.data.find(
    ({ productId: { _id } }) => _id === product?._id
  );

  const { mutate: addLikesUserMutate } = useAddLikesUser();
  const { mutate: removeLikesUserMutate } = useRemoveLikesUser();

  const { OpenToastify } = useToastify();

  const handleLikeUser = () => {
    if (checkLikeUser) {
      removeLikesUserMutate(
        { productId: product?._id as string },
        {
          onSuccess: (response) => {
            OpenToastify(response.message, 'success');
            refetchProduct();
            refetchLikesUser();
            // setLikesCount((prev) => prev - 1);
          },
          onError: () => {},
        }
      );
    } else {
      addLikesUserMutate(
        { productId: product?._id as string },
        {
          onSuccess: (response) => {
            OpenToastify(response.message, 'success');
            refetchProduct();
            refetchLikesUser();
            // setLikesCount((prev) => prev + 1);
          },
          onError: () => {},
        }
      );
    }
  };

  return (
    <>
      {product && (
        <div className="flex gap-6 flex-wrap p-8 rounded-xl border bg-white shadow-lg relative">
          <section className="flex flex-col items-center w-full flex-1 relative">
            <Button
             aria-label="try-again"
              onPress={() => {
                profile?.user
                  ? handleLikeUser()
                  : OpenToastify('نیاز به ورود کاربری', 'error');
              }}
              endContent={checkLikeUser ? <LikeFillIcon /> : <LikeEmptyIcon />}
              size="sm"
              className="absolute top-4 left-4 z-10 text-xl  opacity-80 hover:opacity-100 bg-transparent"
            >
              {product.likesCount}
            </Button>
            <ImgContainer
              className="w-full h-80 object-contain border rounded-lg"
              src={`${process.env.NEXT_PUBLIC_API_IMG}${product.image}`}
            />
            <div className="flex gap-3 mt-4 justify-center flex-wrap">
              <ProductImageGallery product={product} />
            </div>
            <PurchaseBenefits />
          </section>

          <section className="flex flex-col gap-5  w-full md:w-[55%]">
            <DiscountBanner />
            <Title level={5} className=" font-bold text-gray-800 border-b p-2">
              {product.name}
            </Title>
            <ProductCategory product={product} />
            <Text size="sm" className="text-gray-600 mb-6">
              {product.description ||
                'محصولاتی با کیفیت بالا و ویژگی‌های منحصر به فرد که تجربه‌ای عالی برای شما به ارمغان می‌آورند'}
            </Text>
            <ProductPrice product={product} />
            <ProductStock product={product} />
            <Cart />
          </section>
        </div>
      )}
    </>
  );
};

export default Product;
