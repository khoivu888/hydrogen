import React, {Fragment, useState} from 'react';
import {DownButton, Vietnam} from '../../assets/Icon';
import {Listbox} from '@headlessui/react';

export default function Delivery() {
  return (
    <div className="">
      <div className="flex flex-row items-center">
        <span className="font-semibold">Delivery:</span>
        <div className="ml-2 mr-2">
          <Vietnam />
        </div>
        <div className="mr-1">Delivery to</div>
        <div className="underline font-semibold">Vietnam</div>
        <a type="button" className="ml-2 cursor-pointer text-primary">
          Change
        </a>
      </div>
      <div className="mt-5">
        <DeliverySelect />
      </div>
    </div>
  );
}

export const DeliverySelect = () => {
  const delivery = [
    {
      id: 1,
      type: 'Standard Shipping',
      time: 'Feb 14 - Feb 18',
    },
    {
      id: 2,
      type: 'Ground',
      time: 'Feb 14 - Feb 17',
    },
    {
      id: 3,
      type: '2 Days',
      time: 'Feb 14 - Feb 15',
    },
    {
      id: 4,
      type: 'Overnight',
      time: 'Feb 11 - Feb 14',
    },
  ];

  const [selectedDelivery, setSelectedDelivery] = useState(delivery[0]);

  const handleSelectDelivery = (delivery) => {
    setSelectedDelivery({
      id: delivery.id,
      type: delivery.type,
      time: delivery.time,
    });
  };

  return (
    <Listbox value={selectedDelivery.type} onChange>
      <Listbox.Button className="items-center flex  bg-[#F5F5F5] input rounded-none w-full justify-between">
        <div className="flex">
          <span className="font-semibold mr-1">{selectedDelivery.type}</span>
          <div className="ml-1">
            - Get it by
            <span className="text-[#D71920] ml-1">{selectedDelivery.time}</span>
          </div>
        </div>
        <div className="">
          <DownButton />
        </div>
      </Listbox.Button>
      <Listbox.Options className="relative">
        <div className="absolute w-full">
          {delivery.map((delivery) => (
            <Listbox.Option
              key={delivery.id}
              value={delivery.type}
              as={Fragment}
            >
              <li
                className={
                  'items-center  flex bg-[#F5F5F5] input rounded-none w-full'
                }
                onClick={() => {
                  handleSelectDelivery(delivery);
                }}
              >
                <span className="font-semibold mr-1">{delivery.type}</span>
                <div className="ml-1">
                  - Get it by
                  <span className="text-[#D71920] ml-1">{delivery.time}</span>
                </div>
              </li>
            </Listbox.Option>
            /* Use the `active` state to conditionally style the active option. */
            /* Use the `selected` state to conditionally style the selected option. */
          ))}
        </div>
      </Listbox.Options>
    </Listbox>
  );
};
