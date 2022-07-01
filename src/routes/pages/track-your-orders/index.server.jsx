import Layout from '../../../components/Layout/Layout.server';
import React, {Suspense} from 'react';
import {Head, Link} from '@shopify/hydrogen';
import TrackOrderClient from '../../../components/elements/TrackOrder.client';

export default function TrackOrder({query}) {
  return (
    <>
      <Head>
        <title>Track Order</title>
      </Head>
      <Layout query={query}>
        <Suspense fallback={null}></Suspense>
        <div className="relative mb-12 container w-[70%]">
          <TrackOrderClient />
        </div>
      </Layout>
    </>
  );
}
