import {
  flattenConnection,
  gql,
  Seo,
  useQuery,
  useShopQuery,
} from '@shopify/hydrogen';

import LoadMoreProducts from '../../components/elements/LoadMoreProducts.client';
import Layout from '../../components/Layout/Layout.server';
import NotFound from '../../components/elements/NotFound.server';
import React from 'react';
import Breadcrumb from '../../components/elements/Breadcrumb';
import ProductSortClient from '../../components/elements/ProductSort.client';

export default function Collection({
  country = {isoCode: 'US'},
  collectionProductCount = 24,
  params,
  sortKey = 'TITLE',
  reverse = true,
  query,
}) {
  const {handle} = params;
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      handle,
      country: country.isoCode,
      numProducts: collectionProductCount,
      sortKey: sortKey,
      reverse: reverse,
    },
    preload: true,
  });

  const {data: dataCollections} = useShopQuery({
    query: COLLECTION_QUERY,
    preload: true,
  });

  const collections = flattenConnection(dataCollections.collections);

  if (data?.collection == null) {
    return <NotFound />;
  }

  const collection = data.collection;
  const products = flattenConnection(collection.products);
  const hasNextPage = data.collection.products.pageInfo.hasNextPage;

  return (
    <Layout query={query}>
      <div className="container lg:w-[70%] w-full lg:px-0 px-5 mb-12">
        <Breadcrumb firstTitle={'Products'} secondTitle={collection.title} />
        <Seo type="collection" data={{seo: {}, ...collection}} />
        <h1 className="font-bold text-title-5 md:text-5xl text-gray-900 mb-6 mt-6">
          {collection.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{__html: collection.descriptionHtml}}
          className="text-lg"
        />

        <ProductSortClient
          sortKey={sortKey}
          reverse={reverse}
          products={products}
        />
        {hasNextPage && (
          <LoadMoreProducts startingCount={collectionProductCount} />
        )}
      </div>
      {/* the seo object will be expose in API version 2022-04 or later */}
    </Layout>
  );
}

const QUERY = gql`
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $numProducts: Int!
    $sortKey: ProductCollectionSortKeys!
    $reverse: Boolean!
  ) @inContext(country: $country) {
    collection(handle: $handle) {
      id
      title
      descriptionHtml
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: $numProducts, sortKey: $sortKey, reverse: $reverse) {
        edges {
          node {
            title
            vendor
            handle
            descriptionHtml
            compareAtPriceRange {
              maxVariantPrice {
                currencyCode
                amount
              }
              minVariantPrice {
                currencyCode
                amount
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
            productType
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
            metafields(first: 5) {
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
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;

const COLLECTION_QUERY = gql`
  query {
    collections(first: 10, query: "") {
      edges {
        node {
          title
          id
          products(first: 250) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;
