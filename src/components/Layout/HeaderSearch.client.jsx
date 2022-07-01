import React, {useEffect, useRef, useState} from 'react';
import {Link, useRouteParams, useServerProps} from '@shopify/hydrogen';
import {SpinnerIcon} from '../elements/LoadingFallback';

export default function HeaderSearchClient({products, query}) {
  const [search, setSearch] = useState('');

  const [hover, setHover] = useState(false);
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setHover(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  const {serverProps, setServerProps, pending} = useServerProps();

  const handleChange = (event) => {
    setSearch(event.target.value);
    setServerProps('query', event.target.value);
  };

  return (
    <div className="form-control w-full relative">
      <div className="input-group rounded bg-[#F5F5F5]">
        <button className="btn btn-ghost hover:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <input
          value={search}
          onChange={handleChange}
          onFocus={() => setHover(true)}
          onClick={() => {
            setHover(true);
          }}
          id="search-input"
          type="text"
          placeholder="Search for products"
          className="input rounded focus:border-none w-full bg-[#F5F5F5]"
        />
      </div>
      {hover ? (
        <div
          ref={searchRef}
          onMouseEnter={() => setHover(true)}
          className="absolute bg-white w-full mt-14 z-[9999] px-5 shadow-xl"
        >
          {search || pending ? (
            <>
              <div className="text-caption mt-2">SEARCH RESULTS</div>
              {pending ? (
                <SpinnerIcon width={30} height={30} />
              ) : (
                <>
                  {products.length === 0 ? (
                    <div className="text-heading font-light py-5">
                      {' '}
                      No Products...
                    </div>
                  ) : (
                    <>
                      {products?.map((product, index) => (
                        <div
                          key={index}
                          className="h-[60px] mt-3 items-center flex grid grid-cols-12"
                        >
                          <div className="col-span-1">
                            <img
                              className="w-[50px] h-[50px]"
                              alt={product.title}
                              src={product.media.edges[0].node.image.url}
                            />
                          </div>
                          <div className="col-span-11 text-heading font-medium">
                            <Link to={`/product/${product.handle}`}>
                              <div>{product.title}</div>
                              <small className="text-caption font-light">
                                {product.productType}
                              </small>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
            </>
          ) : null}
          {}
        </div>
      ) : null}
    </div>
  );
}
