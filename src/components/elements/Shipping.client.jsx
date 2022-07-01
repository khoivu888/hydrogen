import React from 'react';
import {useAtom} from 'jotai';
import {activeStep, address, email} from '../../atom/variants';

export default function CheckoutShipping() {
  const userEmail = useAtom(email);
  const userAddress = useAtom(address);
  const [step, setStep] = useAtom(activeStep);

  return (
    <div className="mt-5">
      <div className="text-heading font-semibold ">Shipping Information</div>
      <div className="mt-5 px-5 border border-[#AAAAAA] border-[0.5px] w-full">
        <div className="w-full">
          <div className="flex h-[42px] items-center justify-between border-b border-b-[#AAAAAA] border-b-[0.5px]">
            <span className="text-caption font-light">
              Contact: {userEmail}
            </span>
            <div
              onClick={() => setStep(0)}
              className="text-caption hover:cursor-pointer text-primary"
            >
              Change
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center h-[42px] ">
            <span className="text-caption font-light">
              Ship to: {userAddress}
            </span>
            <div
              onClick={() => setStep(0)}
              className="text-caption hover:cursor-pointer text-primary"
            >
              Change
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-heading font-semibold">Shipping Method</div>
      <div className="border border-[#AAAAAA] p-3 border-[0.5px] w-full flex justify-between">
        <div className="flex flex-row items-center">
          <input className="radio radio-sm" type="radio" />
          <div className="text-caption font-light ml-2">
            Tracked Shipping(order under $50)
          </div>
        </div>
        <div className="font-semibold text-caption">$6.99</div>
      </div>
      <button
        onClick={() => setStep(2)}
        type="submit"
        className={
          'mt-5 w-full bg-primary text-white text-heading font-semibold items-center flex justify-center h-[48px] rounded-sm'
        }
      >
        Continue to shipping
      </button>
    </div>
  );
}
