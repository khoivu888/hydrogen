import {useServerProps} from '@shopify/hydrogen';
import SpinnerIcon from './SpinnerIcon.client';

/**
 * A client component that provides functionality to initially show a subset of product and a button to load more product
 */
export default function LoadMoreProducts({startingCount}) {
  const {pending, serverProps, setServerProps} = useServerProps();

  return (
    <div className="flex justify-center h-14">
      {pending ? (
        <SpinnerIcon />
      ) : (
        <button
          type="button"
          disabled={pending}
          className={`uppercase border-4 bg-white border-primary text-primary text-center px-5 py-3 font-mono font-bold drop-shadow-lg active:drop-shadow-none hover:bg-primary hover:text-white hover:border-primary ${
            pending ? 'opacity-50' : undefined
          }`}
          onClick={() => {
            setServerProps(
              'collectionProductCount',
              serverProps.collectionProductCount
                ? serverProps.collectionProductCount + 24
                : startingCount + 24,
            );
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
}
