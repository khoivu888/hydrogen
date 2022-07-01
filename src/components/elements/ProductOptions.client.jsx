import {useProduct} from '@shopify/hydrogen';
import React, {useEffect, useState} from 'react';
import {useAtom} from 'jotai';
import {imageCurrentVariant, variantSelected} from '../../atom/variants';

/**
 * A client component that tracks a selected variant and/or selling plan state, as well as callbacks for modifying the state
 */
export default function ProductOptions({product}) {
  const [listVariants, setListVariants] = useState([]);
  const {options, setSelectedOption, selectedOptions} = useProduct();
  const [, setVariantSelected] = useAtom(variantSelected);
  const [, setImageCurrentVariant] = useAtom(imageCurrentVariant);

  const currentStyle =
    selectedOptions['Style'] || selectedOptions['Product Type'];
  const currentSelection = currentStyle
    ? `${selectedOptions['Style'] || selectedOptions['Product Type']} / ${
        selectedOptions['Color']
      } / ${selectedOptions['Size']}`
    : `${selectedOptions['Color']} / ${selectedOptions['Size']}`;

  const getListVariants = () => {
    product?.variants.edges.map((variant) => {
      const title = variant.node.title;
      setListVariants((values) => [...values, title]);
    });
  };

  const handleSelectedImage = (currentSelection) => {
    product?.variants.edges.forEach((variant) => {
      if (variant.node.title === currentSelection) {
        setImageCurrentVariant(variant.node.image.url);
      }
    });
  };

  useEffect(() => {
    getListVariants();
  }, []);

  useEffect(() => {
    setVariantSelected(currentSelection);
    handleSelectedImage(currentSelection);
  }, [currentSelection]);
  return (
    <>
      {options.map(({name, values}) => {
        return (
          <fieldset key={name} className="mt-8">
            <legend className="mb-4 font-medium text-gray-900 flex">
              {name}:{' '}
              <span className="font-light ml-2 text-[#525252]">
                {name === 'Color' ? (
                  selectedOptions.Color
                ) : name === 'Size' ? (
                  <div className="text-primary link-hover">Style guide</div>
                ) : (
                  <></>
                )}
              </span>
            </legend>
            {name === 'Size' ? (
              <div className="flex items-center flex-wrap gap-4">
                {values.map((value, index) => {
                  const checked = selectedOptions[name] === value;
                  const currentSelection = currentStyle
                    ? `${
                        selectedOptions['Style'] ||
                        selectedOptions['Product Type']
                      } / ${selectedOptions['Color']} / ${value}`
                    : `${selectedOptions['Color']} / ${value}`;
                  const id = `option-${name}-${value}`;
                  if (listVariants.includes(currentSelection)) {
                    return (
                      <label key={index} htmlFor={id}>
                        <input
                          className="sr-only"
                          type="radio"
                          id={id}
                          name={`option[${name}]`}
                          value={value}
                          checked={checked}
                          onChange={() => {
                            setSelectedOption(name, value);
                          }}
                        />
                        <div
                          className={`w-[48px] h-[36px]  rounded-none cursor-pointer btn text-sm md:text-md text-black font-light hover:bg-primary hover:text-white text-[#525252] ${
                            checked
                              ? 'bg-[#F5F5F5] border-primary'
                              : 'bg-[#F5F5F5] border-none'
                          }`}
                        >
                          {value}
                        </div>
                      </label>
                    );
                  }
                })}
              </div>
            ) : name === 'Color' ? (
              <>
                <div className="flex flex-wrap">
                  {values.map((value, index) => {
                    const checked = selectedOptions[name] === value;
                    const currentSelection = currentStyle
                      ? `${
                          selectedOptions['Style'] ||
                          selectedOptions['Product Type']
                        } / ${value} / ${selectedOptions['Size']}`
                      : `${value} / ${selectedOptions['Size']}`;
                    const id = `option-${name}-${value}`;
                    if (listVariants.includes(currentSelection)) {
                      return (
                        <div className="mr-2 mt-2">
                          <label key={index} htmlFor={id}>
                            <input
                              className="sr-only"
                              type="radio"
                              id={id}
                              name={`option[${name}]`}
                              value={value}
                              checked={checked}
                              onChange={() => {
                                setSelectedOption(name, value);
                                setVariantSelected(currentSelection);
                                handleSelectedImage(currentSelection);
                              }}
                            />
                            <div
                              style={{
                                background: `url(https://cdn.shopify.com/s/files/1/0380/1412/4169/files/${value
                                  .toLowerCase()
                                  .replace(/\s/g, '-')}.png?)`,
                              }}
                              className={`w-[30px] h-[30px] border cursor-pointer rounded-full text-sm md:text-md ${
                                checked ? 'border-primary' : 'border-none'
                              }`}
                            ></div>
                          </label>
                        </div>
                      );
                    }
                  })}
                </div>
              </>
            ) : (
              <div className="flex items-center flex-wrap gap-4">
                {values.map((value, index) => {
                  const checked = selectedOptions[name] === value;
                  const id = `option-${name}-${value}`;
                  return (
                    <label key={index} htmlFor={id}>
                      <input
                        className="sr-only"
                        type="radio"
                        id={id}
                        name={`option[${name}]`}
                        value={value}
                        checked={checked}
                        onChange={() => {
                          setSelectedOption(name, value);
                          setVariantSelected(currentSelection);
                          handleSelectedImage(currentSelection);
                        }}
                      />
                      <div
                        className={`w-[120px] h-[36px]  rounded-none cursor-pointer btn text-sm md:text-md text-black font-light hover:bg-primary hover:text-white text-[#525252] ${
                          checked
                            ? 'bg-[#F5F5F5] border-primary'
                            : 'bg-[#F5F5F5] border-none'
                        }`}
                      >
                        {value}
                      </div>
                    </label>
                  );
                })}
              </div>
            )}
          </fieldset>
        );
      })}
    </>
  );
}
