import {Filter, Sort} from '../../assets/Icon';
import SelectFilterClient from './SelectFilter.client';
import FilterProductClient from './FilterProduct.client';
import {
  Image,
  Link,
  ProductPrice,
  ProductProvider,
  useServerProps,
} from '@shopify/hydrogen';
import React, {useState} from 'react';
import LoadingFallback, {SpinnerIcon} from './LoadingFallback';

export default function CollectionFilterClient({
  products,
  collections,
  sortKey,
  reverse,
  productType,
  listProductType,
}) {
  const [currentPrice, setCurrentPrice] = useState(50);
  const {setServerProps, pending, serverProps} = useServerProps();
  const handleChange = (event) => {
    setCurrentPrice(event.target.value);
    setServerProps('price', {min: 0, max: Number(event.target.value)});
  };
  return (
    <div className="grid lg:grid-cols-10 grid-cols-4 my-auto">
      <div className="lg:col-span-2 col-span-1 ">
        <div className="items-center font-bold flex lg:my-5 my-0">
          <Filter />
          <span className="font-bold ml-2">Filter</span>
        </div>
        <div className="w-full p-4 border border-[#525252] lg:block hidden rounded">
          <SelectFilterClient
            productType={productType}
            listProductType={listProductType}
          />
        </div>
        <div className="w-full p-4 border border-[#525252] mt-10 rounded lg:block hidden">
          <div className="flex justify-between">
            <div className="font-semibold">Price ($)</div>
            <div>${currentPrice}</div>
          </div>

          <div className="w-full mt-3">
            <input
              value={currentPrice}
              type="range"
              min="10"
              max="200"
              className="range range-xs text-primary"
              step="10"
              onChange={handleChange}
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>$10</span>
              <span>$200</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-3 lg:my-5  lg:ml-16 ml-0 my-0 ">
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
          <div className="grid lg:grid-cols-3 grid-cols-2 flex flex-wrap">
            {pending ? (
              <>
                <div className="text-title-6">Loading Collection...</div>
              </>
            ) : products.length === 0 ? (
              <div className="text-title-6">No Product Match</div>
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
              })
            )}
          </div>
        </div>
      </div>
      <div className="col-span-10 lg:hidden block">
        <div className="w-full grid lg:grid-cols-3 grid-cols-2 flex flex-wrap">
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
          })}
        </div>
      </div>
    </div>
  );
}
