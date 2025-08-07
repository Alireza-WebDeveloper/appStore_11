import { ShoppingCartFullIcon } from '@/app/lib/design/common/icons';
import { useFetchProfile } from '@/app/lib/hooks/auth';
import {
  useAddProductToCart,
  useGetProfileCart,
  useRemoveProductOfCart,
} from '@/app/lib/hooks/cart';
import { useToastify } from '@/app/lib/hooks/global/toast-notify';
import { Button } from '@nextui-org/react';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

const Cart = () => {
  const { data: profile } = useFetchProfile();

  const params = useParams();
  const productId = params.id as string;

  const { data: profileCart } = useGetProfileCart({
    isActive: profile?.user ? true : false,
  });

  const { mutate: addProduct } = useAddProductToCart();
  const { mutate: removeProduct } = useRemoveProductOfCart();

  const { OpenToastify } = useToastify();

  const handleAddProduct = () => {
    if (profile?.user) {
      //
      addProduct({ productId });
    } else {
      OpenToastify('نیاز به ورود کاربری', 'error');
    }
  };

  const handleRemoveProduct = () => {
    if (profile?.user) {
      //
      removeProduct({ productId });
    } else {
      OpenToastify('نیاز به ورود کاربری', 'error');
    }
  };
  const isActive = profileCart?.data.items.find(
    ({ productId: { _id } }) => _id === productId
  );

  const baseBtnClass =
    'mt-6 px-6 py-3 text-white rounded-md flex items-center gap-2 transition duration-200 transform hover:scale-105';

  return (
    <>
      {isActive ? (
        <Button
         aria-label="delete-cart"
          isLoading={false}
          onPress={handleRemoveProduct}
          endContent={<ShoppingCartFullIcon />}
          className={baseBtnClass + ' bg-red-600 hover:bg-red-700'}
        >
          حذف از سبد خرید
        </Button>
      ) : (
        <Button
         aria-label="add-cart"
          isLoading={false}
          onPress={handleAddProduct}
          endContent={<ShoppingCartFullIcon />}
          className={baseBtnClass + ' bg-teal-600 hover:bg-teal-700'}
        >
          افزودن به سبد خرید
        </Button>
      )}
    </>
  );
};

export default Cart;
