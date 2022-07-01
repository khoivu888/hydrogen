import {useProduct, MediaFile, Image} from '@shopify/hydrogen';
import {useState} from 'react';
import {useAtom} from 'jotai';
import {imageCurrentVariant, variantSelected} from '../../atom/variants';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of product
 */
export default function GalleryMobile() {
  const {media, selectedVariant} = useProduct();
  const featuredMedia = selectedVariant?.image || media[0]?.image;

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
    <div
      className="gap-4 flex md:grid md:grid-cols-2 overflow-x-scroll no-scrollbar scroll-snap-x scroll-smooth h-[485px] md:h-auto place-content-start"
      tabIndex="-1"
    >
      {galleryMedia.map((med) => {
        let extraProps = {};

        if (med.mediaContentType === MODEL_3D_TYPE) {
          extraProps = MODEL_3D_PROPS;
        }

        return (
          <MediaFile
            tabIndex="0"
            key={med.id || med.image.id}
            className="w-[80vw] md:w-auto h-full md:h-auto object-cover object-center transition-all snap-start flex-shrink-0 rounded-lg"
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
      <img
        src={image}
        className="w-[80vw] md:w-full h-full md:h-auto object-cover object-center flex-shrink-0 md:flex-shrink-none snap-start md:col-span-2 rounded-lg"
      />
    </div>
  );
}

const MODEL_3D_TYPE = 'MODEL_3D';
const MODEL_3D_PROPS = {
  interactionPromptThreshold: '0',
};
const VIDEO_TYPE = 'VIDEO';
const EXTERNAL_VIDEO_TYPE = 'EXTERNAL_VIDEO';
