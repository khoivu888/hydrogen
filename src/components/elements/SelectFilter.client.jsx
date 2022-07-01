import {Disclosure} from '@headlessui/react';
import {DownButton} from '../../assets/Icon';
import React from 'react';
import {useServerProps} from '@shopify/hydrogen';

export default function SelectFilterClient({productType, listProductType}) {
  const {setServerProps, pending} = useServerProps();

  return (
    <Disclosure>
      {({open}) => (
        <>
          <Disclosure.Button className="flex justify-between items-center w-full">
            <span className="font-semibold">Product type</span>
            <div
              className={`${
                open
                  ? 'transform transition duration-500 rotate-180'
                  : 'transform transition duration-500'
              }`}
            >
              <DownButton />
            </div>
          </Disclosure.Button>

          <Disclosure.Panel>
            {listProductType.map((collection, index) => (
              <div key={index} className="items-center flex mt-5">
                <input
                  value={collection.node}
                  name="filter"
                  onChange={() =>
                    setServerProps('productType', collection.node)
                  }
                  className="rounded-none radio radio-sm border-black mr-4"
                  type="radio"
                  defaultChecked={collection.node === ''}
                />
                <span className="text-sm">
                  {collection.node ? collection.node : 'All'}
                </span>
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
