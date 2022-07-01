import {Listbox} from '@headlessui/react';
import {DownButton} from '../../assets/Icon';
import React, {Fragment, useEffect, useState} from 'react';
import {useAtom} from 'jotai';
import {sortProduct} from '../../atom/variants';
import {useServerProps} from '@shopify/hydrogen';

const sorts = [
  {
    name: 'Featured',
    value: 'BEST_SELLING',
    reverse: false,
  },
  {
    name: 'Alphabetically: A-Z',
    value: 'TITLE',
    reverse: false,
  },
  {
    name: 'Alphabetically: Z-A',
    value: 'TITLE',
    reverse: true,
  },
  {
    name: 'Price: Low to High',
    value: 'PRICE',
    reverse: false,
  },
  {
    name: 'Price: High to Low',
    value: 'PRICE',
    reverse: true,
  },
];

export default function FilterProductClient({sortKey, reverse}) {
  const [sort, setSort] = useState(sorts[0].name);
  const [value, setValue] = useState('');
  const {setServerProps, pending} = useServerProps();

  return (
    <>
      <Listbox value={value}>
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-[#F5F5F5] py-2 pl-3 pr-2 flex justify-between items-center shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <div>{sort}</div>
          <DownButton />
        </Listbox.Button>
        <Listbox.Options
          className={
            'absolute transition w-[200px] mt-1 z-50 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
          }
        >
          {sorts.map((filter, index) => (
            <div key={index}>
              <Listbox.Option value={filter.value} as={Fragment}>
                <li
                  className={
                    'relative items-center flex bg-[#F5F5F5] cursor-default select-none py-2 pr-4 input rounded-none w-full '
                  }
                  onClick={() => {
                    setSort(filter.name);
                    setValue(filter.value);
                    setServerProps('sortKey', filter.value);
                    setServerProps('reverse', filter.reverse);
                  }}
                >
                  {filter.name}
                </li>
              </Listbox.Option>
            </div>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
}
