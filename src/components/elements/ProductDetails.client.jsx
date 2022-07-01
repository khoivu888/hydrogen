import {
  BuyNowButton,
  flattenConnection,
  Link,
  ProductPrice,
  ProductProvider,
  useParsedMetafields,
  useProduct,
} from '@shopify/hydrogen';
import ProductOptions from './ProductOptions.client';
import Gallery from './Gallery.client';
import {BUTTON_PRIMARY_CLASSES} from './Button.client';
import Review from './Review.client';
import Delivery from './Delivery';
import React, {useEffect, useState} from 'react';
import GalleryMobile from './GaleryMobile.client';
import {
  Amex,
  Discover,
  Facebook,
  Instagram,
  Mastercard,
  Opay,
  Paypal,
  Twitter,
  Visa,
} from '../../assets/Icon';
import {useAtom} from 'jotai';
import {cartItem} from '../../atom/cart';
import Breadcrumb from './Breadcrumb';

function AddToCartMarkup({product, number}) {
  const {selectedVariant} = useProduct();
  const firstVariant = product.variants?.edges[0];
  const firstVariantColor = firstVariant.node.selectedOptions.map((option) => {
    if (option.name === 'Color') {
      return option.value;
    }
  });
  const firstVariantSize = firstVariant.node.selectedOptions.map((option) => {
    if (option.name === 'Size') {
      return option.value;
    }
  });
  const firstVariantProductType = firstVariant.node.selectedOptions.map(
    (option) => {
      if (option.name === 'Product Type') {
        return option.value;
      }
    },
  );
  const [cart, setCartItem] = useAtom(cartItem);
  const [currentVariant, setCurrentVariant] = useState({});
  const [colorVariant, setColorVariant] = useState(firstVariantColor);
  const [sizeVariant, setSizeVariant] = useState(firstVariantSize);
  const [productType, setProductType] = useState(firstVariantProductType);

  useEffect(() => {
    selectedVariant.selectedOptions.map((option) => {
      if (option.name === 'Color') {
        setColorVariant(option.value);
      }
      if (option.name === 'Size') {
        setSizeVariant(option.value);
      }
      if (option.name === 'Product Type') {
        setProductType(option.value);
      }
    });
    setCurrentVariant({
      product: product,
      productType: productType,
      image: selectedVariant.image.url,
      title: product.title,
      id: product.id,
      handle: product.handle,
      color: colorVariant,
      size: sizeVariant,
      price: selectedVariant.priceV2.amount,
      number: number ? number : '',
      priceAllItem: Number(
        (selectedVariant.priceV2.amount * number).toFixed(2),
      ),
    });
  }, [selectedVariant, number, colorVariant, sizeVariant, productType]);

  const handleSubmit = () => {
    setCartItem([...cart, currentVariant]);
  };

  return (
    <div className="space-y-2 ">
      <button onClick={handleSubmit} className={BUTTON_PRIMARY_CLASSES}>
        Buy it now
      </button>
    </div>
  );
}

function SizeChart() {
  return (
    <>
      <h3
        className="text-xl text-black font-semibold mt-8 mb-4"
        id="size-chart"
      >
        Size Chart
      </h3>
      <table className="min-w-full table-fixed text-sm text-center bg-white">
        <thead>
          <tr className="bg-black text-white">
            <th className="w-1/4 py-2 px-4 font-normal">Board Size</th>
            <th className="w-1/4 py-2 px-4 font-normal">154</th>
            <th className="w-1/4 py-2 px-4 font-normal">158</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border border-black">Weight Range</td>
            <td className="p-3 border border-black">120-180 lbs. /54-82kg</td>
            <td className="p-3 border border-black">150-200 lbs. /68-91 kg</td>
          </tr>
          <tr>
            <td className="p-3 border border-black">Waist Width</td>
            <td className="p-3 border border-black">246mm</td>
            <td className="p-3 border border-black">255mm</td>
          </tr>
          <tr>
            <td className="p-3 border border-black">Stance Width</td>
            <td className="p-3 border border-black">-40</td>
            <td className="p-3 border border-black">-40</td>
          </tr>
          <tr>
            <td className="p-3 border border-black">Binding Sizes</td>
            <td className="p-3 border border-black">
              Men&rsquo;s S/M, Women&rsquo;s S/M
            </td>
            <td className="p-3 border border-black">
              Men&rsquo;s L, Women&rsquo;s L
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export const ProductDetails = ({product}) => {
  const initialVariant = flattenConnection(product.variants)[0];

  const productMetafields = useParsedMetafields(product.metafields);
  const sizeChartMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' && metafield.key === 'size_chart',
  );
  const sustainableMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' && metafield.key === 'sustainable',
  );
  const lifetimeWarrantyMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' &&
      metafield.key === 'lifetime_warranty',
  );
  const [number, setNumber] = useState(1);

  return (
    <>
      <ProductProvider data={product} initialVariantId={initialVariant?.id}>
        <div className="text-[14px] text-[#525252] breadcrumbs">
          <Breadcrumb
            firstTitle="Product Details"
            secondTitle={`${product.title}`}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-8 my-10">
          <div className="md:hidden mt-5 mb-8">
            <div>{product.title}</div>
            {product.vendor && (
              <div className="text-sm font-medium mb-2 text-gray-900">
                {product.vendor}
              </div>
            )}
            <span />
            <div className="flex justify-between md:block">
              <ProductPrice
                className="text-gray-500 line-through text-lg font-semibold"
                priceType="compareAt"
                variantId={initialVariant.id}
              />
              <ProductPrice
                className="text-gray-900 text-lg font-semibold"
                variantId={initialVariant.id}
              />
            </div>
          </div>
          <div className="lg:block hidden">
            <Gallery product={product} />
          </div>
          <div className="lg:hidden block">
            <GalleryMobile />
          </div>

          <div>
            <div className="hidden md:block">
              <div className="text-title-5 font-semibold">{product.title}</div>
              <Review numberReview={220} />
              <ProductPrice
                className="text-3xl text-[#D71920] mt-3 font-semibold"
                variantId={initialVariant.id}
              />
              <div className="mt-5">
                <Delivery />
              </div>
            </div>
            {/* Product Options */}
            <div className="mt-8">
              <ProductOptions product={product} />
              {sizeChartMetafield?.value && (
                <a
                  href="src/components/elements/ProductDetails.client#size-chart"
                  className="block underline text-gray-500 text-sm tracking-wide my-4"
                >
                  Size Chart
                </a>
              )}
              <div className="grid grid-cols-7 mt-5 mb-8">
                <div className="col-span-2">
                  <div className="btn-group flex-row">
                    <button
                      onClick={() => setNumber(number - 1)}
                      className={
                        number > 1
                          ? 'm-0 btn btn-ghost w-1/4 py-4 items-center normal-case text-center rounded'
                          : 'm-0 btn btn-disabled w-1/4 py-4 items-center normal-case text-center rounded'
                      }
                    >
                      -
                    </button>
                    <button className="m-0 btn btn-ghost  py-4 items-center normal-case text-center rounded">
                      {number}
                    </button>
                    <button
                      onClick={() => setNumber(number + 1)}
                      className="m-0 btn btn-ghost  w-1/4 py-4 items-center normal-case text-center   rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-5">
                  <AddToCartMarkup product={product} number={number} />
                </div>
              </div>
              <div className="mt-10">
                <div className="text-sm">
                  Guaranteed safe and secure checkout via:
                </div>
                <div className="flex flex-row mt-3">
                  <div className="mr-3">
                    <Visa />
                  </div>
                  <div className="mr-3">
                    <Mastercard />
                  </div>
                  <div className="mr-3">
                    <Discover />
                  </div>
                  <div className="mr-3">
                    <Amex />
                  </div>
                  <div className="mr-3">
                    <Paypal />
                  </div>
                  <div className="mr-3">
                    <Opay />
                  </div>
                </div>
                <div className="mt-5 flex flex-row items-center">
                  <span className="mr-3">Share:</span>
                  <div className="mr-3">
                    <Facebook />
                  </div>
                  <div className="mr-3">
                    <Twitter />
                  </div>
                  <div className="mr-3">
                    <Instagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductProvider>
    </>
  );
};
