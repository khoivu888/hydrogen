import {
  CacheHours,
  flattenConnection,
  gql,
  LocalizationProvider,
  useShopQuery,
} from '@shopify/hydrogen';
import React from 'react';
import TopBanner from '../elements/TopBanner';
import Footer from '../elements/Footer.client';
import HeaderMobile from './HeaderMobile.client';
import HeaderDesktop from './HeaderDesktop.client';
import Cart from '../cart/Cart.client';
import SingleHeader from './SingleHeader.client';

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export default function Layout({children, query}) {
  const {data: dataProducts} = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      query: query,
    },
    preload: '*',
  });

  const products = dataProducts
    ? flattenConnection(dataProducts.products)
    : null;

  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numCollections: 10,
    },
    cache: CacheHours(),
    preload: '*',
  });

  const {data: dataMenu} = useShopQuery({
    query: MENU_QUERY,
    variables: {
      handle: 'main-menu',
    },
    preload: true,
  });

  const {data: dataFooterPolicy} = useShopQuery({
    query: MENU_QUERY,
    variables: {
      handle: 'policy',
    },
    preload: true,
  });

  const {data: dataFooter} = useShopQuery({
    query: MENU_QUERY,
    variables: {
      handle: 'footer',
    },
    preload: true,
  });

  const listMenu = dataMenu.menu;
  const listFooter = dataFooterPolicy.menu;
  const listFooterSecondary = dataFooter.menu;

  const collections = data ? flattenConnection(data.collections) : null;

  return (
    <>
      <LocalizationProvider preload="*">
        <div className=" text-gray-700 font-sans">
          <TopBanner numberItem={2} percentSave={10} couponCode={'EC2'} />
          {/* TODO: Find out why Suspense needs to be here to prevent hydration errors. */}
          <div className="md:hidden block">
            <HeaderMobile collections={collections} />
          </div>
          <div className="md:block hidden sticky top-0 z-50">
            <SingleHeader listMenu={listMenu} products={products} />
          </div>
          <Cart />
          <main role="main" id="mainContent" className="">
            {children}
          </main>
          <Footer
            listFooter={listFooter}
            listFooterSecondary={listFooterSecondary}
          />
        </div>
      </LocalizationProvider>
    </>
  );
}

const PRODUCT_QUERY = gql`
  query HomeQuery($query: String) {
    products(first: 10, query: $query) {
      edges {
        node {
          productType
          handle
          id
          media(first: 1) {
            edges {
              node {
                ... on MediaImage {
                  mediaContentType
                  image {
                    id
                    url
                    altText
                    width
                    height
                  }
                }
              }
            }
          }
          priceRange {
            maxVariantPrice {
              currencyCode
              amount
            }
            minVariantPrice {
              currencyCode
              amount
            }
          }
          metafields(first: 3) {
            edges {
              node {
                id
                type
                namespace
                key
                value
                createdAt
                updatedAt
                description
                reference {
                  __typename
                  ... on MediaImage {
                    id
                    mediaContentType
                    image {
                      id
                      url
                      altText
                      width
                      height
                    }
                  }
                }
              }
            }
          }
          title
          variants(first: 1) {
            edges {
              node {
                id
                title
                availableForSale
                image {
                  id
                  url
                  altText
                  width
                  height
                }
                priceV2 {
                  currencyCode
                  amount
                }
                compareAtPriceV2 {
                  currencyCode
                  amount
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
      filters {
        id
        label
        type
        values {
          count
          id
          input
          label
        }
      }
    }
  }
`;

const QUERY = gql`
  query layoutContent($numCollections: Int!) {
    shop {
      name
    }
    collections(first: $numCollections) {
      edges {
        node {
          description
          handle
          id
          title
          image {
            id
            url
            altText
            width
            height
          }
        }
      }
    }
  }
`;

const MENU_QUERY = gql`
  query GetMenu($handle: String!) {
    menu(handle: $handle) {
      handle
      id
      items {
        id
        items {
          id
          resourceId
          tags
          title
          type
          url
        }
        resourceId
        tags
        title
        type
        url
      }
      itemsCount
      title
    }
  }
`;
