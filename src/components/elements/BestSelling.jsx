// Import the `ProductCard` shared component so that it's accessible to `ProductList`.
import ProductCard from './ProductCard.client';
import React from 'react';
import {Link} from '@shopify/hydrogen';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRightLong} from '@fortawesome/free-solid-svg-icons';
// The `ProductList` component accepts `product` as a prop.
export default function BestSelling({products}) {
  // Return a list of product organized in a three-column grid.
  return (
    <>
      <div className="pl-5 mt-10 mb-3">
        <div className="flex justify-between items-center">
          <div className="font-bold mb-2 lg:text-2xl text-title-6 text-base">
            Best Selling ⭐
          </div>
          <div>
            <Link
              className="items-center flex flex-row text-primary"
              to="/collections/best-selling"
            >
              <div className="text-body mr-5">Show More</div>
            </Link>
          </div>
        </div>

        <div className="flex grid lg:grid-cols-5 grid-cols-2 flex-wrap">
          {products.slice(0, 5).map((product) => (
            // Each product card maps to a product in the storefront.
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex grid lg:grid-cols-5 grid-cols-2 flex-wrap">
          <div className="col-span-2 pr-3">
            <img
              className="w-full h-[310px]"
              src="https://cdn.shopify.com/s/files/1/0562/1248/8378/files/Banner_small_3.png?v=1651114624"
            />
          </div>
          {products.slice(5, 8).map((product) => (
            // Each product card maps to a product in the storefront.
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
