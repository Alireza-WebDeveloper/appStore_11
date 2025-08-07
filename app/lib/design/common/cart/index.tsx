import React, { FC } from 'react';
import { cn } from '@/app/lib/utils/cn';
import LinkContainer from '../link-container';
import Text from '../text';
import { CartProps } from './index.types';
import { ShoppingCartFullIcon } from '../icons';

const Cart: FC<CartProps> = ({ itemCount = 0, className }) => {
  return (
    <LinkContainer
    className={cn('relative cursor-pointer', className)}
      href={'/dashboard/cart'}
    >
      <ShoppingCartFullIcon width={30} height={30} />

      {itemCount > 0 && (
        <Text
          as="span"
          className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
        >
          {itemCount}
        </Text>
      )}
    </LinkContainer>
  );
};

export default Cart;
