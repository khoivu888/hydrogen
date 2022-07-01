import React, {useEffect, useState} from 'react';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import {Link} from '@shopify/hydrogen';
import {LogoHeaderDesktop, Search} from '../../assets/Icon';
import HeaderSearchClient from './HeaderSearch.client';
import UserIcon from '../../assets/UserIcon';
import CartIcon from '../elements/CartIcon';
import NavbarDesktop from './NavbarDesktop.client';
import {useAtom} from 'jotai';
import {cartItem} from '../../atom/cart';
import ForgotPassword from '../auth/ForgotPassword';

export default function SingleHeader({products, listMenu}) {
  const [user, setUser] = useState('1');
  const cartItems = useAtom(cartItem);
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-white shadow shadow-xl mb-5">
        <div className="container bg-white  w-[70%] transition">
          <div className="navbar flex flex-row bg-base-100 justify-between">
            <div className="basis-2/12">
              <Link to={'/'}>
                <LogoHeaderDesktop width={136} height={38} />
              </Link>
            </div>
            <div className="basis-3/4 pt-2">
              <HeaderSearchClient products={products} />
            </div>
            <div className="basis-1/12 items-center pt-2 flex justify-between dropdown dropdown-end">
              <label
                htmlFor="signin-modal"
                className="btn-ghost btn modal-button"
                onClick={showModal}
              >
                {user ? (
                  <UserIcon width={24} height={24} />
                ) : (
                  <div className="mr-10 link-hover">Login</div>
                )}
              </label>
              <Link className="btn btn-ghost relative" to="/cart">
                <div className="absolute top-3 right-4 bg-primary w-[13px] h-[13px] text-2xs rounded-full text-white">
                  {cartItems[0].length}
                </div>
                <CartIcon width={24} height={24} />
              </Link>
            </div>
          </div>
          <NavbarDesktop listMenu={listMenu} />
        </div>
      </div>
      <SignIn isOpen={isOpen} handleCancel={handleCancel} handleOK={handleOk} />
      <SignUp />
      <ForgotPassword />
    </>
  );
}
