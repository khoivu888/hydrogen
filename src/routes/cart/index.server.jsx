import Layout from '../../components/Layout/Layout.server';
import Breadcrumb from '../../components/elements/Breadcrumb';
import OrderSummary from '../../components/cart/OrderSummary.client';
import CartSubtotalClient from '../../components/cart/CartSubtotal.client';
import {Head} from '@shopify/hydrogen';
import React from 'react';

export default function Index({query}) {
  return (
    <>
      <Head>
        <title>Your Cart</title>
      </Head>
      <Layout query={query}>
        <div className="lg:w-[70%] w-full container lg:px-0 px-5">
          <div className="md:block hidden">
            <Breadcrumb firstTitle={'Cart'} />
          </div>
          <div className="grid flex lg:flex-row flex-col grid-cols-10 mt-10">
            <div className="lg:col-span-7 col-span-10 lg:mr-5 mr-0">
              <OrderSummary />
            </div>
            <div className="lg:col-span-3 col-span-10 lg:ml-5 ml-0">
              <CartSubtotalClient />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
