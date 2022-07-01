import {Image, Link, ProductPrice, ProductProvider} from '@shopify/hydrogen';
import React from 'react';
import {gql} from '@shopify/hydrogen';
import {useParsedMetafields, useShopQuery} from '@shopify/hydrogen';

export default function Suggest(props) {
  const currentId = props.currentProductID;

  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      productId: currentId.toString(),
    },
    preload: true,
  });

  const products = data.productRecommendations;

  return (
    <>
      <div className="mt-10 text-2xl font-bold">You May Also Like</div>
      <div
        className="gap-4 flex flex-nowrap w-full overflow-hidden overflow-x-scroll no-scrollbar place-content-start"
        tabIndex="-1"
      >
        {products.map((product) => {
          const firstVariant = product.variants?.edges[0]?.node;
          return (
            <ProductProvider data={product} initialVariantId={firstVariant.id}>
              <div className="lg:w-[20%] w-[50%] bg-base-100 m-5 mb-5">
                <Link to={`/product/${product.handle}`}>
                  <figure className="overflow-hidden relative">
                    <Image
                      data={firstVariant.image}
                      className="w-full h-[156px] hover:transform transition-all hover:overflow-hidden hover:scale-150 lg:w-full lg:h-[236px]"
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
          );
        })}
      </div>
    </>
  );
}
const QUERY = gql`
  query HomeQuery($productId: ID!) {
    productRecommendations(productId: $productId) {
      images(first: 1) {
        edges {
          node {
            altText
            url
          }
        }
      }
      title
      productType
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
      variants(first: 1) {
        edges {
          node {
            id
            image {
              altText
              url
            }
            priceV2 {
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
    }
  }
`;
