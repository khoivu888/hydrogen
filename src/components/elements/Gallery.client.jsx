import {MediaFile, useProduct} from '@shopify/hydrogen';
import React, {Fragment, useState} from 'react';
import {Tab} from '@headlessui/react';
import InnerImageZoom from 'react-inner-image-zoom';
import {useAtom} from 'jotai';
import {imageCurrentVariant, variantSelected} from '../../atom/variants';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of product
 */
export default function Gallery({product}) {
  const {media, selectedVariant} = useProduct();
  const featuredMedia = selectedVariant.image || media[0]?.image;
  const [featuredMediaSrc, setFeaturedMediaSrc] = useState(
    featuredMedia?.url.split('?')[0],
  );

  const selectedTitle = useAtom(variantSelected);
  const [image, setImageCurrentVariant] = useAtom(imageCurrentVariant);

  const galleryMedia = media.filter((med) => {
    if (
      med.mediaContentType === MODEL_3D_TYPE ||
      med.mediaContentType === VIDEO_TYPE ||
      med.mediaContentType === EXTERNAL_VIDEO_TYPE
    ) {
      return true;
    }

    return !med.image.url.includes(featuredMediaSrc);
  });

  if (!media.length) {
    return null;
  }

  return (
    <>
      <div className="w-full">
        <div
          className="gap-4 md:grid md:grid-flow-row md:grid-cols-10 no-scrollbar scroll-snap-x scroll-smooth h-[485px] md:h-auto place-content-start"
          tabIndex="-1"
        >
          <div className="md:grid-flow-col md:col-span-1 w-[80vw] md:w-auto h-full md:h-auto">
            {galleryMedia.map((med) => {
              let extraProps = {};

              if (med.mediaContentType === MODEL_3D_TYPE) {
                extraProps = MODEL_3D_PROPS;
              }

              return (
                <MediaFile
                  tabIndex="0"
                  key={med.id || med.image.id}
                  className="object-cover lg:block hidden object-center mb-3 transition-all snap-start  flex-shrink-0 rounded-lg"
                  data={med}
                  options={{
                    height: '485',
                    crop: 'center',
                  }}
                  onClick={() => {
                    setImageCurrentVariant(med.image.url);
                  }}
                  {...extraProps}
                />
              );
            })}
          </div>
          <div className="md:col-span-9">
            <InnerImageZoom
              src={!image ? featuredMediaSrc : image}
              zoomType="click"
            />
          </div>
        </div>
        <div className="col-span-full mt-10">
          <Tab.Group defaultIndex={0}>
            <Tab.List className="justify-around text-xl ">
              <Tab>
                {({selected}) => (
                  <button
                    className={
                      selected
                        ? 'border-b-2  border-black p-2 mr-10'
                        : 'border-none font-light p-2 mr-10 text-[#AAAAAA]'
                    }
                  >
                    Description
                  </button>
                )}
              </Tab>
              {/* Selects this tab by default */}
              <Tab>
                {({selected}) => (
                  <a
                    className={
                      selected
                        ? 'border-b-2 border-black p-2 mr-10'
                        : 'border-none font-light p-2 mr-10 text-[#AAAAAA]'
                    }
                  >
                    Shipping & Refund
                  </a>
                )}
              </Tab>

              <Tab>
                {({selected}) => (
                  <a
                    className={
                      selected
                        ? 'border-b-2 border-black p-2'
                        : 'border-none font-light p-2 text-[#AAAAAA]'
                    }
                  >
                    Store Review
                  </a>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="p-2 mt-3">
              <Tab.Panel>
                <div
                  dangerouslySetInnerHTML={{__html: product.descriptionHtml}}
                ></div>
              </Tab.Panel>

              {/* Displays this panel by default */}
              <Tab.Panel>Update Later...</Tab.Panel>

              <Tab.Panel>Update Later...</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}

const MODEL_3D_TYPE = 'MODEL_3D';
const MODEL_3D_PROPS = {
  interactionPromptThreshold: '0',
};
const VIDEO_TYPE = 'VIDEO';
const EXTERNAL_VIDEO_TYPE = 'EXTERNAL_VIDEO';
