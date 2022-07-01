import React from 'react';
import {Check, Shipping, Support, Trophy} from '../../assets/PoliciesIcon';

export default function Policies() {
  return (
    <div className="mt-10  px-6 items-center w-full">
      <div className="flex flex-wrap justify-between w-full">
        <div className="w-1/2 md:w-fit flex flex-row ">
          <div className="md:hidden block">
            <Trophy width={26} height={28} />
          </div>
          <div className="md:block hidden">
            <Trophy width={35} height={40} />
          </div>
          <div className="flex flex-col ml-1">
            <p className="font-bold lg:text-sm text-xs">High Quality</p>
            <p className="text-xs lg:text-sm font-light text-[#AAAAAA] lg:mt-1 mt-0">
              Printed in the US
            </p>
          </div>
        </div>
        <div className="w-1/2 md:w-fit flex flex-row">
          <div className="md:hidden block">
            <Check width={28} height={28} />
          </div>
          <div className="md:block hidden">
            <Check width={40} height={38} />
          </div>
          <div className="flex flex-col ml-1">
            <p className="font-bold lg:text-sm text-xs">Reliable & Ensured</p>
            <p className="text-xs lg:text-sm font-light text-[#AAAAAA] lg:mt-1 mt-0">
              Reliable shipping and easy returns
            </p>
          </div>
        </div>
        <div className="w-1/2 mt-3 md:w-fit flex flex-row lg:mt-0">
          <div className="md:hidden block">
            <Shipping width={28} height={28} />
          </div>
          <div className="md:block hidden">
            <Shipping width={40} height={37} />
          </div>
          <div className="flex flex-col ml-1">
            <p className="font-bold lg:text-sm text-xs">Free Shipping</p>
            <p className="text-xs lg:text-sm font-light text-[#AAAAAA] lg:mt-1 mt-0">
              Order over $70
            </p>
          </div>
        </div>
        <div className="w-1/2 mt-3 flex flex-row md:w-fit lg:mt-0">
          <div className="md:hidden block">
            <Support width={26} height={28} />
          </div>
          <div className="md:block hidden">
            <Support width={35} height={40} />
          </div>
          <div className="flex flex-col ml-1">
            <p className="font-bold lg:text-sm text-xs">24 / 7 Support</p>
            <p className="text-xs lg:text-sm font-light text-[#AAAAAA] lg:mt-1 mt-0">
              Dedicated Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
