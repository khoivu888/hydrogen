import {flattenConnection, useShopQuery} from '@shopify/hydrogen';
import {gql} from '@shopify/hydrogen';

import Layout from '../Layout/Layout.server';
import Button from './Button.client';
import {Image, Link, ProductPrice, ProductProvider} from '@shopify/hydrogen';

/**
 * A server component that defines the content to display when a page isn't found (404 error)
 */
function NotFoundHero() {
  return (
    <div className="py-10">
      <div className="max-w-3xl text-center mx-4 md:mx-auto">
        <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 mt-6">
          We&#39;ve lost this page
        </h1>
        <p className="text-lg m-8 text-gray-500">
          We couldn’t find the page you’re looking for. Try checking the URL or
          heading back to the home page.
        </p>
        <Button
          className="w-full md:mx-auto md:w-96"
          url="/"
          label="Take me to the home page"
        />
      </div>
    </div>
  );
}

export default function NotFound({country = {isoCode: 'US'}, query}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
      numProductMetafields: 0,
      numProductVariants: 250,
      numProductMedia: 0,
      numProductVariantMetafields: 0,
      numProductVariantSellingPlanAllocations: 0,
      numProductSellingPlanGroups: 0,
      numProductSellingPlans: 0,
    },
  });
  const products = data ? flattenConnection(data.products) : [];

  return (
    <Layout query={query}>
      <NotFoundHero />
      <div className="my-8 container w-[70%]">
        <p className="mb-8 text-lg text-black font-medium uppercase">
          Products you might like
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {products.map((product) => {
            const firstVariant = product.variants?.edges[0]?.node;

            return (
              <div key={product.id}>
                <ProductProvider
                  data={product}
                  initialVariantId={firstVariant.id}
                >
                  <div className="bg-base-100 hover:translate-x-2 p-5 hover:translate-y-2 hover:shadow-xl mb-5">
                    <Link to={`/product/${product.handle}`}>
                      <figure>
                        <Image
                          data={firstVariant.image}
                          className="w-[156px] h-[156px] lg:w-[236px] lg:h-[236px]"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="whitespace-nowrap font-light pl-2 overflow-hidden text-ellipsis text-left">
                        {product.title}
                        <div className="text-[#AAAAAA] text-xs text-left">
                          T-Shirt
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
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query NotFoundProductDetails($country: CountryCode)
  @inContext(country: $country) {
    products(first: 5) {
      edges {
        node {
          handle
          id
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
    }
  }
`;
