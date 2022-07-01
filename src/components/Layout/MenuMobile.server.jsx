import React from 'react';
import BannerMobile1 from '../elements/BannerMobile1';
import Policies from '../elements/Policies';
import GiftCollection from '../elements/GiftCollection';
import {flattenConnection, useShopQuery} from '@shopify/hydrogen';
import {gql} from '@shopify/hydrogen';
import ProductList from '../elements/ProductList';
import Carousel from '../elements/Carousel';
import Contact from '../elements/Contact';
import {QUERY_PRODUCTS} from '../query/query';

export default function MenuMobile() {
  const image2 = [
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
  ];

  const image = [
    {
      id: 1,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_74_39e09268-63ed-4186-a1e9-83079459d2b0.png?v=1650946964',
      alt: 'Gift Collection 1',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
    {
      id: 2,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_74_39e09268-63ed-4186-a1e9-83079459d2b0.png?v=1650946964',
      alt: 'Gift Collection 2',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
    {
      id: 3,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_74_39e09268-63ed-4186-a1e9-83079459d2b0.png?v=1650946964',
      alt: 'Gift Collection 3',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
    {
      id: 4,
      src: 'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Rectangle_74_39e09268-63ed-4186-a1e9-83079459d2b0.png?v=1650946964',
      alt: 'Gift Collection 4',
      rating: 5,
      title: 'Super cute. Great gift idea',
      comment: 'This was a gift to my dad and he loved it!',
    },
  ];

  const {data} = useShopQuery({
    query: QUERY_PRODUCTS,
  });

  const products = flattenConnection(data.products);

  return (
    <>
      <div className="md:hidden block">
        <BannerMobile1
          link={
            'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Banner_Mobile_1.png?v=1650943186'
          }
        />
        <Policies />
        <GiftCollection product={image} />
        <GiftCollection product={image2} />
        <ProductList products={products} />
        <div className="mt-10 items-center text-center w-full">
          <BannerMobile1
            link={
              'https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Pink_Valentine_Day_Promo_Sale_Banner_Free_2_1.png?v=1651021337'
            }
          />
        </div>
        <Carousel feedBack={image2} />
        <Contact />
      </div>
    </>
  );
}
