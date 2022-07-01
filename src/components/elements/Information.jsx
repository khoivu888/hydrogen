import {GPayLarge, PaypalLarge, ShopPayLarge} from '../../assets/Icon';
import React, {useEffect, useState} from 'react';
import {useAtom} from 'jotai';
import {activeStep, address, email, shippingFee} from '../../atom/variants';

export default function Information() {
  const [data, setData] = useState({});
  const [, setStep] = useAtom(activeStep);
  const [, setEmailUser] = useAtom(email);
  const [, setAddressUser] = useAtom(address);
  const [, setShipping] = useAtom(shippingFee);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({...values, [name]: value}));
  };

  useEffect(() => {
    setEmailUser(data.email);
    setAddressUser(
      `${data.address} ${data.address_option ? data.address_option : ''}`,
    );
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(1);
  };

  return (
    <>
      <div className="mt-5 text-heading font-semibold">Express Checkout</div>
      <div className="mt-5 p-5 border border-[#AAAAAA] border-[0.5px] grid-cols-3 grid flex">
        <div className="col-span-1 px-3">
          <button className="w-full bg-[#5A31F4] items-center flex justify-center h-[48px] rounded-sm">
            <ShopPayLarge />
          </button>
        </div>
        <div className="col-span-1 px-3">
          <button className="w-full bg-[#FFC439] items-center flex justify-center h-[48px] rounded-sm">
            <PaypalLarge />
          </button>
        </div>
        <div className="col-span-1 px-3">
          <button className="w-full bg-[#000000] items-center flex justify-center h-[48px] rounded-sm">
            <GPayLarge />
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <div className="justify-between flex">
            <span className="text-heading font-semibold">
              Contact Information
            </span>
            <div className="font-medium text-caption">
              Already have an account?{' '}
              <span className="text-primary">Login</span>
            </div>
          </div>
        </div>
        <input
          onChange={handleChange}
          name="email"
          className="w-full mt-3 px-3 border border-[#AAAAAA] h-[44px] rounded-sm"
          placeholder="Enter email address"
        />
        <div className="flex items-center mt-3">
          <input
            name="accept_email"
            type="checkbox"
            className="checkbox-xs mr-2"
          />
          <span className="text-caption font-light">
            Email me with news and offers
          </span>
        </div>
        <div className="mt-5">
          <span className="text-heading font-semibold">Shipping Address</span>
          <select
            onChange={handleChange}
            name="country"
            className="w-full mt-3 px-3 border select border-[#AAAAAA] h-[44px] rounded-sm"
          >
            <option>Vietnam</option>
            <option>United States</option>
          </select>
          <div className="flex grid grid-cols-2 mt-3">
            <input
              onChange={handleChange}
              name="first_name"
              className="col-span-1 border border-[#AAAAAA] px-3 mr-2 border-[0.5px] rounded-sm h-[44px]"
              placeholder="First name (optional)"
            />
            <input
              onChange={handleChange}
              name="last_name"
              className="col-span-1 border border-[#AAAAAA] px-3 ml-2 border-[0.5px] rounded-sm h-[44px]"
              placeholder="Last name"
            />
          </div>
          <input
            onChange={handleChange}
            name="address"
            className="w-full mt-3 px-3 border border-[#AAAAAA] h-[44px] rounded-sm"
            placeholder="Address"
          />
          <input
            onChange={handleChange}
            name="address_option"
            className="w-full mt-3 px-3 border border-[#AAAAAA] h-[44px] rounded-sm"
            placeholder="Apartment, suite, etc. (optional)"
          />
          <div className="flex grid grid-cols-2 mt-3">
            <input
              onChange={handleChange}
              name="city"
              className="col-span-1 border border-[#AAAAAA] px-3 mr-2 border-[0.5px] rounded-sm h-[44px]"
              placeholder="City"
            />
            <input
              onChange={handleChange}
              name="postal_code"
              className="col-span-1 border border-[#AAAAAA] px-3 ml-2 border-[0.5px] rounded-sm h-[44px]"
              placeholder="Postal code"
            />
          </div>
          <input
            onChange={handleChange}
            name="phone"
            className="w-full mt-3 px-3 border border-[#AAAAAA] h-[44px] rounded-sm"
            placeholder="Phone"
          />
          <div className="flex flex-row px-3 py-3 border border-[#AAAAAA] rounded-sm mt-5">
            <input className="checkbox-xs" type="checkbox" />
            <div className="flex flex-col ml-2">
              <span className="font-semibold text-caption">
                Get discount on your next order
              </span>
              <span className="font-light text-caption">
                Sign up for our text club and we will text you a discount code.
              </span>
            </div>
          </div>
          <div className="mt-5">
            <button
              onClick={() => {
                setStep(1);
                setShipping(6.99);
              }}
              type="submit"
              className={
                data.address
                  ? 'w-full bg-primary text-white text-heading font-semibold items-center flex justify-center h-[48px] rounded-sm'
                  : 'w-full text-white text-heading font-semibold items-center flex justify-center h-[48px] rounded-sm btn-disabled'
              }
            >
              Continue to shipping
            </button>
          </div>
          <div className="mt-5 text-caption font-light">
            By checking this box I consent to receive recurring automated
            marketing by text message through an automatic telephone dialing
            system. Consent is not a condition to purchase. Message and Data
            rate apply. Opt-Out by texting STOP. View Privacy Policy
          </div>
        </div>
      </form>
    </>
  );
}
