import Contact from '../elements/Contact';
import React from 'react';
import CarouselBanner from '../elements/CarouselBanner';
import Policies from '../elements/Policies';
import GiftCollection from '../elements/GiftCollection';
import ProductList from '../elements/ProductList';
import {flattenConnection, gql, useShopQuery} from '@shopify/hydrogen';
import BestSelling from '../elements/BestSelling';
import Carousel from '../elements/Carousel';

export default function MenuDesktopServer() {
  const image2 = [
    {
      id: 1,
      src: 'https://cdn.shopify.com/s/files/1/0627/7172/4516/files/z3324911787623_c8a915e2640c8afa95f362dadebd4091_350x.jpg?v=1649407013',
      alt: 'Gift Collection 1',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
      link: '/collections/gifts-for-family',
    },
    {
      id: 2,
      src: 'https://cdn.shopify.com/s/files/1/0627/7172/4516/files/z3324911789139_9e463d00f8ebd67bf4af389272ff7ac0_350x.jpg?v=1649407013',
      alt: 'Gift Collection 2',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
      link: '/collections/gifts-for-grandparents',
    },
    {
      id: 3,
      src: 'https://cdn.shopify.com/s/files/1/0627/7172/4516/files/z3324911787624_b28985d71abc453675665cb4e95b79e9_300x.jpg?v=1649407012',
      alt: 'Gift Collection 3',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
      link: '/collections/gifts-for-cat-lovers',
    },
    {
      id: 4,
      src: 'https://cdn.shopify.com/s/files/1/0627/7172/4516/files/z3324911782604_ff6fee06a42f41391674ed991143a0ce_200x.jpg?v=1649407013',
      alt: 'Gift Collection 4',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
      link: '/collections/gifts-for-dog-lovers',
    },
  ];

  const imageFeedback = [
    {
      id: 1,
      src: 'https://cdn.shopify.com/s/files/1/0627/7172/4516/files/z3324911787623_c8a915e2640c8afa95f362dadebd4091_350x.jpg?v=1649407013',
      alt: 'Gift Collection 1',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
    {
      id: 2,
      src: 'https://cdn.shopify.com/s/files/1/0627/7172/4516/files/z3324911789139_9e463d00f8ebd67bf4af389272ff7ac0_350x.jpg?v=1649407013',
      alt: 'Gift Collection 2',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
    {
      id: 3,
      src: 'https://cdn.shopify.com/s/files/1/0627/7172/4516/files/z3324911787624_b28985d71abc453675665cb4e95b79e9_300x.jpg?v=1649407012',
      alt: 'Gift Collection 3',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
    {
      id: 4,
      src: 'https://cdn.shopify.com/s/files/1/0627/7172/4516/files/z3324911782604_ff6fee06a42f41391674ed991143a0ce_200x.jpg?v=1649407013',
      alt: 'Gift Collection 4',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
    {
      id: 5,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_76.png?v=1651129530',
      alt: 'Gift Collection 4',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
    {
      id: 6,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_77.png?v=1651129530',
      alt: 'Gift Collection 4',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
    {
      id: 7,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_78.png?v=1651129530',
      alt: 'Gift Collection 4',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
  ];

  const image = [
    {
      id: 1,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_74_39e09268-63ed-4186-a1e9-83079459d2b0.png?v=1650946964',
      alt: 'Gift Collection 1',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
      link: '/collections/gifts-for-dog-lovers',
    },
    {
      id: 2,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_74_39e09268-63ed-4186-a1e9-83079459d2b0.png?v=1650946964',
      alt: 'Gift Collection 2',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
      link: '/collections/gifts-for-dog-lovers',
    },
    {
      id: 3,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_74_39e09268-63ed-4186-a1e9-83079459d2b0.png?v=1650946964',
      alt: 'Gift Collection 3',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
      link: '/collections/gifts-for-dog-lovers',
    },
    {
      id: 4,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_74_39e09268-63ed-4186-a1e9-83079459d2b0.png?v=1650946964',
      alt: 'Gift Collection 4',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
      link: '/collections/gifts-for-dog-lovers',
    },
  ];

  const {data} = useShopQuery({
    query: QUERY,
  });

  const {data: dataBestSelling} = useShopQuery({
    query: BEST_SELLING_QUERY,
    variables: {
      country: 'US',
      handle: 'best-selling',
    },
  });
  const collection = dataBestSelling.collection;
  const BestSellingProducts = flattenConnection(collection.products);

  const products = flattenConnection(data.products);

  return (
    <>
      <div className="container w-[70%] md:block hidden">
        <CarouselBanner />
        <Policies />
        <GiftCollection product={image2} />
        <GiftCollection product={image} />
        <ProductList products={products} />
        <BestSelling products={BestSellingProducts} />
        <Carousel feedBack={imageFeedback} />
        <Contact />
      </div>
    </>
  );
}

const QUERY = gql`
  query HomeQuery {
    products(first: 10) {
      edges {
        node {
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
          productType
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

const BEST_SELLING_QUERY = gql`
  query CollectionDetails($handle: String!, $country: CountryCode)
  @inContext(country: $country) {
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
      products(first: 10) {
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
