'use client';

import { useFetchProfile } from '@/app/lib/hooks/auth';
import { useGetProfileCart } from '@/app/lib/hooks/cart';
import CartItem from './components/cart-item';
import Animation from '@/app/lib/design/common/animation';
import NoResult from '@/app/lib/design/common/no-result';
import CartSummary from './components/cart-summary';

const CartPage = () => {
  const { data: profile } = useFetchProfile();
  const {
    data: profileCart,
    isLoading,
    isRefetching,
    refetch,
  } = useGetProfileCart({
    isActive: profile?.user ? true : false,
  });

  const loading = isLoading || isRefetching;
  const isRenderData = profileCart?.data && profileCart.data.itemsCount > 0;

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-right">سبد خرید</h1>
      {loading ? (
        <Animation />
      ) : isRenderData ? (
        profileCart?.data.items.map((item) => {
          return <CartItem  item={item} key={item._id} />;
        })
      ) : (
        <NoResult />
      )}
      {isRenderData && (
        <CartSummary
        refetch={refetch}
          totalItems={profileCart.data.itemsCount}
          totalPrice={profileCart.data.totalPrice}
        />
      )}
    </div>
  );
};

export default CartPage;
