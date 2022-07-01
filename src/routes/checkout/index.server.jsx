import React from 'react';
import CheckoutInfo from '../../components/elements/CheckoutInfo.client';
import OrderSummaryCheckOut from '../../components/cart/OrderSummaryCheckOut.client';
import LogoHeader from '../../assets/LogoHeader';
import {Head, Link} from '@shopify/hydrogen';

export default function Index() {
  return (
    <>
      <Head>
        <title>Check Out</title>
      </Head>
      <div className="lg:w-[70%] w-full container py-10 ">
        <Link to="/">
          <LogoHeader />
        </Link>
        <div className="flex grid lg:grid-cols-2 lg:flex-row grid-cols-1">
          <div className="col-span-1 lg:px-5 px-5">
            <CheckoutInfo />
          </div>
          <div className="col-span-1 lg:px-5 px-0">
            <OrderSummaryCheckOut />
          </div>
        </div>
      </div>
    </>
  );
}
