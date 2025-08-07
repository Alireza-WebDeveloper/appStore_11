'use client';

import { useGetProfileCart } from '@/app/lib/hooks/cart';
import Cart from '../../../common/cart';
import { useFetchProfile } from '@/app/lib/hooks/auth';

const CartButton = () => {
  const { data: profile } = useFetchProfile();

  const { data } = useGetProfileCart({
    isActive: profile?.user ? true : false,
  });

  return <Cart className="text-white" itemCount={data?.data.itemsCount} />;
};

export default CartButton;
