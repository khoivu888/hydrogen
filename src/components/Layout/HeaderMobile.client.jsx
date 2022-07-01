import React, {useEffect, useState} from 'react';
import {Link, useServerProps} from '@shopify/hydrogen';
import {useCartUI} from '../cart/CartUIProvider.client';
import MobileNavigation from './MobileNavigation.client';
import UserIcon from '../../assets/UserIcon';
import LogoHeader from '../../assets/LogoHeader';
import CartIcon from '../elements/CartIcon';
import {useAtom} from 'jotai';
import {cartItem} from '../../atom/cart';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import ForgotPassword from '../auth/ForgotPassword';

/**
 * A client component that specifies the content of the header on the website
 */
export default function HeaderMobile({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const {isCartOpen} = useCartUI();
  const cartItems = useAtom(cartItem);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const showModal = () => {
    setIsSignInOpen(true);
  };

  const handleOk = () => {
    setIsSignInOpen(false);
  };

  const handleCancel = () => {
    setIsSignInOpen(false);
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    setScrollbarWidth(scrollbarWidth);
  }, [isCartOpen]);

  return (
    <>
      <header className="" role="banner">
        <div
          className={` z-20 h-20 lg:h-32 w-full border-b border-gray-200 px-6 mx-auto bg-white ${
            isMobileNavOpen ? '' : 'bg-opacity-95'
          }`}
        >
          <div
            className="h-full flex place-content-between"
            style={{
              paddingRight: isCartOpen ? scrollbarWidth : 0,
            }}
          >
            <div className="w-full justify-between flex items-center">
              <MobileNavigation
                collections={collections}
                isOpen={isMobileNavOpen}
                setIsOpen={setIsMobileNavOpen}
              />
              <div className="w-full ml-5 justify-between flex items-center">
                <Link
                  className="font-black justify-start tracking-widest"
                  to="/"
                >
                  <LogoHeader width={114} height={32} />
                </Link>
                <div className="flex items-center justify-end">
                  <label
                    onClick={showModal}
                    htmlFor="signin-modal"
                    className=""
                  >
                    <UserIcon width={24} height={24} />
                  </label>
                  <Link className="btn btn-ghost relative" to="/cart">
                    <div className="absolute top-3 right-4 bg-primary w-[13px] h-[13px] text-2xs rounded-full text-white">
                      {cartItems[0].length}
                    </div>
                    <CartIcon width={24} height={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SignIn
        isOpen={isSignInOpen}
        handleCancel={handleCancel}
        handleOK={handleOk}
      />
      <SignUp />
      <ForgotPassword />
    </>
  );
}
