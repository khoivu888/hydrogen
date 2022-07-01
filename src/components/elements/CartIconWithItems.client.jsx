import {useCart} from '@shopify/hydrogen';
import React from 'react';
import CartIcon from './CartIcon';
/**
 * A client component that specifies the icon to use if a cart contains merchandise
 */
export default function CartIconWithItems() {
  const {totalQuantity} = useCart();

  return (
    <>
      <div className="relative">
        <CartIcon width={24} height={24} />
        <div
          className={`bg-blue-700 md:text-xs text-2xs rounded-full leading-none text-white absolute top-0 right-0 flex items-center justify-center  ${
            totalQuantity > 0 ? 'h-3 w-3' : 'h-0 w-0 overflow-hidden'
          }`}
          aria-hidden
        >
          {totalQuantity > 0 ? totalQuantity : null}
        </div>
      </div>
      <span className="sr-only">Cart, {totalQuantity} items</span>
    </>
  );
}
