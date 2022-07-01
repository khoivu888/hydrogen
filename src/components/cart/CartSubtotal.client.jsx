import {BUTTON_PRIMARY_CLASSES} from '../elements/Button.client';
import {GPay, PaypalButton, ShopPay} from '../../assets/Icon';
import {useAtom} from 'jotai';
import {cartItem, totalItems, totalPrice} from '../../atom/cart';
import {Link} from '@shopify/hydrogen';
import {useEffect, useState} from 'react';
import {activeStep} from '../../atom/variants';

export default function CartSubtotalClient(props) {
  const cartItems = useAtom(cartItem);
  const items = cartItems[0];
  const [total, setTotal] = useAtom(totalPrice);
  const [totalItem, setTotalItem] = useAtom(totalItems);
  const [, setTab] = useAtom(activeStep);

  const countTotal = () => {
    let sum = 0;
    let sumItem = 0;
    items.forEach((item) => {
      sum += item.priceAllItem;
      sumItem += item.number;
    });
    setTotal(Number(sum.toFixed(2)));
    setTotalItem(sumItem);
  };

  useEffect(() => {
    countTotal();
  }, [items]);

  return (
    <>
      <div className="px-5">
        <div className="text-title-6 font-semibold">Cart Subtotal</div>
        <div className="p-5 border border-[#AAAAAA] rounded mt-5">
          <input
            className="w-full rounded bg-[#E5E5E5] px-5 h-[44px] placeholder-[#AAAAAA]"
            placeholder="Discounts Code"
          />
          <textarea
            className="w-full mt-5 rounded bg-[#E5E5E5] pt-2 px-5 h-[110px] placeholder-[#AAAAAA]"
            placeholder="Notes"
          />
          <div className="mt-5 items-center justify-between flex">
            <div className="text-body">
              Subtotal:{' '}
              <span className="text-body font-light text-[#525252]">
                {totalItem} items
              </span>
            </div>
            <div className="text-body font-semibold">$</div>
          </div>
          <div className="w-full border-t border-dashed mt-5 border-t-[#AAAAAA]"></div>
          <div className="mt-5 items-center justify-between flex">
            <div className="text-heading">Total</div>
            <div className="text-heading text-primary font-semibold">
              {total}$
            </div>
          </div>
          <div className="text-caption font-light text-center mt-3">
            Shipping and tax will be calculated on checkout
          </div>
          <div className="mt-3">
            <Link to="/checkout">
              <button
                onClick={() => setTab(0)}
                className={`${BUTTON_PRIMARY_CLASSES} text-[#FFFFFF] text-title-6`}
              >
                Check out
              </button>
            </Link>
          </div>
          <div className="mt-3 flex lg:justify-between grid lg:flex-row flex-col lg:grid-cols-3">
            <button
              className={`btn border-none bg-[#5A31F4] lg:mr-3  rounded items-center lg:col-span-1 col-span-3`}
            >
              <ShopPay />
            </button>
            <button
              className={`btn border-none bg-[#FFC439] lg:mr-3 lg:mt-0 mt-3 rounded items-center lg:col-span-1 col-span-3 `}
            >
              <PaypalButton />
            </button>
            <button
              className={`btn border-none bg-[#000000] lg:mr-3 lg:mt-0 mt-3 rounded items-center lg:col-span-1 col-span-3`}
            >
              <GPay />
            </button>
          </div>
          <div className="mt-5 text-body font-light lg:block hidden">
            Note: Please double check your order information such as color, size
            before payment to avoid errors in the ordering process.
          </div>
        </div>
      </div>
    </>
  );
}
