import {Filter, Sort} from '../../assets/Icon';
import React from 'react';
import {gql} from '@shopify/hydrogen';
import {flattenConnection, useShopQuery} from '@shopify/hydrogen';
import FilterProductClient from './FilterProduct.client';
import SelectFilterClient from './SelectFilter.client';
import {Image, Link, ProductPrice, ProductProvider} from '@shopify/hydrogen';
import LoadMoreProducts from './LoadMoreProducts.client';

export const FilterProduct = (collections) => {
  const filter = 'T-shirt';

  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      product_type: `product_type:${filter}`,
    },
    preload: true,
  });

  const products = data ? flattenConnection(data.products) : [];

  return (
    <>
      <div className="grid grid-cols-10 ">
        <div className="col-span-2">
          <div className="items-center font-bold flex mt-5 mb-5">
            <Filter />
            <span className="font-bold ml-2">Filter:</span>
          </div>
          <div className="w-full p-4 border border-[#525252] rounded">
            <SelectFilterClient
              filter={filter}
              listCollection={collections.collections}
            />
          </div>
          <div className="w-full p-4 border border-[#525252] mt-10 rounded">
            <div className="font-semibold">Price ($)</div>
            <div className="w-full mt-3">
              <input
                type="range"
                min="50"
                max="200"
                className="range range-xs text-primary"
                step="10"
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 mt-5 ml-16 mb-5">
          <div className="flex justify-between mb-10">
            <div>
              Showing <span className="font-bold">{products.length}</span> items
            </div>
            <div className="flex ">
              <div className="flex flex-row mt-2 mr-2 items-baseline">
                <Sort />
                <span className="ml-2 mr-2">Sort:</span>
              </div>
              <div>
                <div className="w-[200px]">
                  <FilterProductClient />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap">
            {products.map((product, index) => {
              const firstVariant = product.variants?.edges[0]?.node;
              return (
                <div className="w-1/3">
                  <ProductProvider
                    data={product}
                    initialVariantId={firstVariant.id}
                  >
                    <div key={index} className="bg-base-100 mb-3 mr-5">
                      <Link to={`/product/${product.handle}`}>
                        <figure className="overflow-hidden relative">
                          <Image
                            data={firstVariant.image}
                            className="hover:transform transition-all hover:overflow-hidden hover:scale-150 w-full h-[370px]"
                            alt="Shoes"
                          />
                        </figure>
                        <div className="whitespace-nowrap font-light pl-2 overflow-hidden text-ellipsis text-left">
                          <div>{product.title}</div>
                          <div className="text-[#AAAAAA] text-xs text-left">
                            {product.productType}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-[#D71920] md:text-lg text-md font-bold">
                              <ProductPrice />
                            </div>
                            <div className="badge border-none rounded-none md:badge-md badge-xs bg-[#EAE8FE] text-xs md:text-sm text-[#150699]">
                              Fast Shipping
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ProductProvider>
                </div>
              );
            })}
          </div>
          <LoadMoreProducts />
        </div>
      </div>
    </>
  );
};

const QUERY = gql`
  query HomeQuery($product_type: String) {
    products(first: 18, query: $product_type) {
      edges {
        node {
          productType
          handle
          id
          media(first: 10) {
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
    }
  }
`;
