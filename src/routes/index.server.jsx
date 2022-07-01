import {CacheDays, Seo, useShopQuery} from '@shopify/hydrogen';
import {gql} from '@shopify/hydrogen';
import React, {Suspense} from 'react';
import Layout from '../components/Layout/Layout.server';
import MenuMobile from '../components/Layout/MenuMobile.server';
import MenuDesktopServer from '../components/Layout/MenuDesktop.server';

export default function Index({country = {isoCode: 'US'}, query}) {
  return (
    <Layout query={query}>
      <Suspense fallback={null}>
        <SeoForHomepage />
      </Suspense>
      <div className="relative mb-12">
        <MenuDesktopServer />
        <MenuMobile />
      </div>
    </Layout>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {
        name: shopName,
        primaryDomain: {url: shopUrl},
      },
    },
  } = useShopQuery({
    query: SEO_QUERY,
    cache: CacheDays(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title: shopName,
        url: shopUrl,
      }}
    />
  );
}

const SEO_QUERY = gql`
  query homeShopInfo {
    shop {
      name
      description
      primaryDomain {
        url
      }
    }
  }
`;
