// Import client components that need to be accessible to the `ProductCard` component.
import {Image, Link, ProductPrice, ProductProvider} from '@shopify/hydrogen';

import React from 'react';
// The `ProductCard` component accepts `product` as a prop.
export default function ProductCard({product}) {
  // The product card displays the first product variant.
  const firstVariant = product.variants?.edges[0]?.node;

  // Return the first variant of the product. The product card
  // links to a product details page (specified by the product handle)
  // and displays the product's image, title, and price of the first variant.
  return (
    <ProductProvider data={product} initialVariantId={firstVariant.id}>
      <div className="bg-base-100 col-span-1 mr-5 mb-5">
        <Link to={`/product/${product.handle}`}>
          <figure className="overflow-hidden relative">
            <Image
              data={firstVariant.image}
              className="hover:transform transition-all hover:overflow-hidden hover:scale-150 w-[156px] h-[156px] lg:w-[236px] lg:h-[236px]"
              alt="Shoes"
            />
          </figure>
          <div className="whitespace-nowrap font-light pl-2 overflow-hidden text-ellipsis text-left">
            <div className="truncate">{product.title}</div>
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
}
