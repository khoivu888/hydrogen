// Import the `ProductCard` shared component so that it's accessible to `ProductList`.
import ProductCard from './ProductCard.client';
import React from 'react';
// The `ProductList` component accepts `product` as a prop.
export default function ProductList({products}, titles) {
  // Return a list of product organized in a three-column grid.
  return (
    <>
      <div className="pl-5 mt-10">
        <div className="font-bold text-title-6 mb-2 lg:text-2xl text-base">
          Product List
        </div>
        <div className="flex grid lg:grid-cols-5 grid-cols-2 ">
          {products.map((product) => (
            // Each product card maps to a product in the storefront.
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
