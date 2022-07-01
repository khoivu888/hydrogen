import React from 'react';
import {Head, Link} from '@shopify/hydrogen';
import LogoHeader from '../../assets/LogoHeader';
import CheckoutInfo from '../../components/elements/CheckoutInfo.client';
import OrderSummaryCheckOut from '../../components/cart/OrderSummaryCheckOut.client';
import ThankYou from '../../components/elements/ThankYou.client';
import OrderSummaryThankYou from '../../components/cart/OrderSummaryThankYou.client';
import Suggest from '../../components/elements/Suggest';
import {useAtom} from 'jotai';
import {cartItem} from '../../atom/cart';
import {gql} from '@shopify/hydrogen';

export default function Index() {
  return (
    <>
      <Head>
        <title>Thanks for choose us</title>
      </Head>
      <div className="lg:w-[70%] w-full container py-10 ">
        <Link to="/">
          <LogoHeader />
        </Link>
        <div className="flex grid lg:grid-cols-2 lg:flex-row grid-cols-1">
          <div className="col-span-1 lg:px-5 px-5">
            <ThankYou />
          </div>
          <div className="col-span-1 lg:px-5 px-0">
            <OrderSummaryThankYou />
          </div>
        </div>
      </div>
    </>
  );
}
