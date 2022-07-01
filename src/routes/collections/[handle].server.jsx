import {
  flattenConnection,
  Seo,
  useServerProps,
  useShopQuery,
} from '@shopify/hydrogen';
import {gql} from '@shopify/hydrogen';

import LoadMoreProducts from '../../components/elements/LoadMoreProducts.client';
import Layout from '../../components/Layout/Layout.server';
import NotFound from '../../components/elements/NotFound.server';
import React from 'react';
import CollectionFilterClient from '../../components/elements/CollectionFilter.client';
import Breadcrumb from '../../components/elements/Breadcrumb';
import {filter} from 'compression';

export default function Collection({
  country = {isoCode: 'US'},
  collectionProductCount = 24,
  params,
  sortKey = 'TITLE',
  reverse = true,
  productType = '',
  price = {min: 0, max: 50},
  query,
}) {
  const filter =
    productType && price
      ? [{productType: productType}, {price: price}]
      : productType
      ? [{productType: productType}]
      : price
      ? [{price: price}]
      : {};

  const {handle} = params;
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      handle,
      country: country.isoCode,
      numProducts: collectionProductCount,
      sortKey: sortKey,
      reverse: reverse,
      filters: filter,
    },
    preload: true,
  });

  const {data: dataProductType} = useShopQuery({
    query: PRODUCTTYPE_QUERY,
    preload: true,
  });

  if (data?.collection == null) {
    return <NotFound />;
  }

  const collection = data.collection;
  const products = flattenConnection(collection.products);
  const hasNextPage = data.collection.products.pageInfo.hasNextPage;
  const listProductType = dataProductType.productTypes.edges;

  return (
    <Layout query={query}>
      <div className="container lg:w-[70%] w-full lg:px-0 px-5 mb-12">
        <Breadcrumb firstTitle={'Collections'} secondTitle={collection.title} />
        <Seo type="collection" data={{seo: {}, ...collection}} />
        <h1 className="font-bold text-title-5 md:text-5xl text-gray-900 mb-6 mt-6">
          {collection.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{__html: collection.descriptionHtml}}
          className="text-lg"
        />

        <CollectionFilterClient
          sortKey={sortKey}
          reverse={reverse}
          products={products}
          productType={productType}
          listProductType={listProductType}
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
    $filters: [ProductFilter!]
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
      products(
        first: $numProducts
        sortKey: $sortKey
        reverse: $reverse
        filters: $filters
      ) {
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

const PRODUCTTYPE_QUERY = gql`
  query {
    productTypes(first: 100) {
      edges {
        cursor
        node
      }
    }
  }
`;
