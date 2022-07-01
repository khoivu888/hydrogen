import React from 'react';
import {Link} from '@shopify/hydrogen';

export default function GiftCollection(images) {
  return (
    <>
      <div className="mt-10 pl-5">
        <div className="font-bold lg:text-title-6 text-base">
          Gift Collection
        </div>
        <div className="md:hidden block">
          <div className="flex flex-wrap ">
            {images.product.map((image, index) => (
              <>
                <div key={index} className="w-1/2 pr-5 mt-5">
                  <Link to={image.link}>
                    <img
                      width={200}
                      height={200}
                      src={image.src}
                      alt={image.alt}
                    />
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="md:block hidden">
          <div className="flex grid grid-cols-4">
            {images.product.map((image, index) => (
              <div key={index} className="w-full pr-5 mt-5 col-span-1">
                <Link to={image.link}>
                  <img className="w-full" src={image.src} alt={image.alt} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
