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

export default function HeaderDesktop({products, listMenu, query}) {
  const [user, setUser] = useState('1');
  const [header, setHeader] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const cartItems = useAtom(cartItem);
  const [search, setSearch] = useState(false);
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

  const handleHeaderOnScroll = () => {
    setScrollY(window.pageYOffset);

    setHeader((header) => {
      if (
        !header &&
        (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
      ) {
        return !header;
      }
      if (
        header &&
        document.body.scrollTop < 1 &&
        document.documentElement.scrollTop < 1
      ) {
        return false;
      }

      return header;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderOnScroll);
  }, []);

  return (
    <>
      {!header || scrollY < 1 ? (
        <>
          <div className="bg-white">
            <div className="container bg-white  w-[70%] border-b-[0.5px] border-b-[#DADADA] transition">
              <div className="navbar flex flex-row bg-base-100 justify-between">
                <div className="basis-2/12">
                  <Link to={'/'}>
                    <LogoHeaderDesktop width={136} height={38} />
                  </Link>
                </div>
                <div className="basis-3/4 pt-2">
                  <HeaderSearchClient query={query} products={products} />
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
              <NavbarDesktop listMenu={listMenu} header={header} />
            </div>
          </div>
        </>
      ) : null}
      {scrollY > 1 ? (
        <div className="bg-white transition-transform ease-linear shadow-xl transition">
          <div className="container bg-white  w-[70%]">
            <div className="navbar flex flex-row bg-base-100 justify-between">
              <div className="basis-2/12">
                <Link to={'/'}>
                  <LogoHeaderDesktop width={136} height={38} />
                </Link>
              </div>
              <div className="basis-3/4 pt-2">
                <NavbarDesktop listMenu={listMenu} header={header} />
              </div>
              <div className="basis-1/12 items-center pt-2 flex justify-between mr-0 dropdown dropdown-end">
                <div
                  onClick={() => setSearch(!search)}
                  className="btn-ghost btn"
                >
                  <Search />
                </div>
                <div>
                  <label
                    htmlFor="signin-modal"
                    className="btn-ghost modal-button btn"
                    onClick={showModal}
                  >
                    <UserIcon width={24} height={24} />
                  </label>
                </div>
                <Link className="btn btn-ghost relative" to="/cart">
                  <div className="absolute top-3 right-4 bg-primary w-[13px] h-[13px] text-2xs rounded-full text-white">
                    {cartItems[0].length}
                  </div>
                  <CartIcon width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className="mx-auto pb-3 w-2/3">
              {search ? (
                <HeaderSearchClient query={query} products={products} />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : null}
      <SignIn isOpen={isOpen} handleCancel={handleCancel} handleOK={handleOk} />
      <SignUp />
      <ForgotPassword />
    </>
  );
}
