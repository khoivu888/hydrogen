import {Sort} from '../../assets/Icon';
import FilterProductClient from './FilterProduct.client';
import {
  Image,
  Link,
  ProductPrice,
  ProductProvider,
  useServerProps,
} from '@shopify/hydrogen';
import React, {useEffect} from 'react';

export default function ProductSortClient({products, sortKey, reverse}) {
  const {serverProps, pending} = useServerProps();
  return (
    <div className="grid lg:grid-cols-10 grid-cols-4 my-auto">
      <div className="col-span-10 lg:my-5 my-0 ">
        <div className="flex justify-between mb-10 items-center">
          <div className="font-light flex flex-row">
            Showing{' '}
            <span className="font-bold text-primary mx-1">
              {products.length}
            </span>{' '}
            {products.length > 1 ? 'products' : 'product'}
          </div>
          <div className="flex ">
            <div className="flex flex-row lg:mt-2 mt-0 lg:ml-0 ml-2 mr-2 items-baseline">
              <Sort />
              <span className="mx-2">Sort:</span>
            </div>
            <div className="lg:block hidden">
              <div className="w-[200px]">
                <FilterProductClient sortKey={sortKey} reverse={reverse} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:block hidden ">
          {pending ? (
            <div className="text-title-6">Loading Products...</div>
          ) : products.length === 0 ? (
            <div className="text-title-6">No Product</div>
          ) : (
            <div className="grid lg:grid-cols-4 grid-cols-2 flex flex-wrap">
              {products?.map((product) => {
                const firstVariant = product.variants?.edges[0]?.node;
                return (
                  <div className="grid-cols-1 mb-3 mr-5">
                    <ProductProvider
                      data={product}
                      initialVariantId={firstVariant?.id}
                    >
                      <div className="bg-base-100 mb-5">
                        <Link to={`/product/${product.handle}`}>
                          <figure className="overflow-hidden relative">
                            <Image
                              data={firstVariant?.image}
                              className="hover:transform transition-all hover:overflow-hidden hover:scale-150 w-full lg:h-[295px] h-[156px]"
                              alt="Shoes"
                            />
                          </figure>
                          <div className="whitespace-nowrap font-light pl-2 overflow-hidden text-ellipsis text-left">
                            {product.title}
                            <div className="text-[#AAAAAA] text-xs text-left">
                              {product.productType}
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-[#D71920] md:text-lg text-md font-bold">
                                <ProductPrice />
                              </div>
                              <div className="badge border-none rounded-none md:badge-sm badge-xs bg-[#EAE8FE] text-2xs md:text-sm text-[#150699]">
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
          )}
        </div>
      </div>
      <div className="col-span-10 lg:hidden block">
        <div className="w-full grid lg:grid-cols-3 grid-cols-2 flex flex-wrap">
          {pending ? (
            <div>Loading Products...</div>
          ) : (
            products?.map((product) => {
              const firstVariant = product.variants?.edges[0]?.node;
              return (
                <div className="grid-cols-1 mb-3 mr-5">
                  <ProductProvider
                    data={product}
                    initialVariantId={firstVariant?.id}
                  >
                    <div className="bg-base-100 mb-5">
                      <Link to={`/product/${product.handle}`}>
                        <figure className="overflow-hidden relative">
                          <Image
                            data={firstVariant?.image}
                            className="hover:transform transition-all hover:overflow-hidden hover:scale-150 w-full lg:h-[295px] h-[156px]"
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
                            <div className="badge border-none rounded-none md:badge-sm badge-xs bg-[#EAE8FE] text-2xs md:text-sm text-[#150699]">
                              Fast Shipping
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </ProductProvider>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
