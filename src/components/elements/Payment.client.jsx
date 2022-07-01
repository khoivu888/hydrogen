import React, {useEffect, useState} from 'react';
import {useAtom} from 'jotai';
import {activeStep, address, billingAddress, email} from '../../atom/variants';
import {Button, Radio} from 'antd';
import {Disclosure, Transition} from '@headlessui/react';
import {
  Amex,
  Discover,
  Mastercard,
  PaypalLarge,
  ShopPayLargePurple,
  Visa,
} from '../../assets/Icon';
import {useNavigate} from '@shopify/hydrogen';
import {totalPrice} from '../../atom/cart';

export default function Payment() {
  const userEmail = useAtom(email);
  const userAddress = useAtom(address);
  const [, setStep] = useAtom(activeStep);
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [billing, setBilling] = useAtom(billingAddress);
  const [total, setTotal] = useAtom(totalPrice);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/thank-you');
  };

  useEffect(() => {
    data.payment_method === 'card' ? setIsOpen(true) : setIsOpen(false);
    data.billing_checkbox === 'different'
      ? setIsAddressOpen(true)
      : setIsAddressOpen(false);
    data.payment_method && data.billing_checkbox
      ? setIsActive(true)
      : setIsActive(false);
    setBilling(
      data.billing_checkbox === 'same' ? userAddress : data.billing_address,
    );
  }, [data]);

  return (
    <div className="mt-5 ">
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
      <div className="mt-5 font-semibold text-heading">Add Tip</div>
      <div className="mt-2 text-caption font-light">
        Show your support for the team at Chillever
      </div>
      <div className="p-5 border border-[#AAAAAA] border-[0.5px] w-full mt-2">
        <Radio.Group
          defaultValue="0"
          className="flex flex-row grid grid-cols-4"
        >
          <Radio.Button
            className="col-span-1 mr-3 h-[63px] bg-[#F5F5F5]"
            value="5%"
          >
            <div className="flex justify-center text-center h-full  items-center">
              <div>
                <div className="text-body">5%</div>
                <div className="text-caption">${(total / 20).toFixed(2)}</div>
              </div>
            </div>
          </Radio.Button>
          <Radio.Button
            className="col-span-1 mr-3 h-[63px] bg-[#F5F5F5]"
            value="10%"
          >
            <div className="flex justify-center text-center h-full  items-center">
              <div>
                <div className="text-body">10%</div>
                <div className="text-caption">${(total / 10).toFixed(2)}</div>
              </div>
            </div>
          </Radio.Button>
          <Radio.Button
            className="col-span-1 mr-3 h-[63px] bg-[#F5F5F5]"
            value="15%"
          >
            <div className="flex justify-center h-full  items-center">
              <div>
                <div className="text-body">15%</div>
                <div className="text-caption">
                  ${((total / 100) * 15).toFixed(2)}
                </div>
              </div>
            </div>
          </Radio.Button>
          <Radio.Button
            className="col-span-1 mr-3 h-[63px] bg-[#F5F5F5]"
            value="0"
          >
            <div className="flex justify-center h-full  items-center">
              <span className="text-caption">None</span>
            </div>
          </Radio.Button>
        </Radio.Group>
        <div className="mt-3 flex flex-row items-center">
          <input
            onChange={handleChange}
            className="px-3 mr-3 w-full border border-[#AAAAAA] h-[44px] rounded-sm"
            placeholder="Custom tip"
            name="custom_tip"
          />
          <Button
            type="primary"
            className={
              data.custom_tip
                ? 'w-[99px] border-none h-[44px] text-caption bg-primary text-white rounded-sm'
                : 'w-[99px] border-none h-[44px] text-caption btn-disabled rounded-sm'
            }
          >
            Update Tip
          </Button>
        </div>
        <div className="mt-3 text-caption font-light">
          Thank you, we appreciate it!
        </div>
      </div>
      <div className="mt-5 text-heading font-semibold">Add Payment</div>
      <div className="mt-3 text-caption font-light">
        All transactions are secure and encrypted.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-5 border border-[#AAAAAA] border-[0.5px] w-full mt-2 w-full">
          <Disclosure defaultOpen={true} className="w-full py-2">
            {({open}) => (
              <>
                <div className="border-b border-b-[#AAAAAA] border-dashed">
                  <Disclosure.Button className="w-full pb-3">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-row items-center">
                        <input
                          name="payment_method"
                          className="radio radio-sm"
                          type="radio"
                          value="card"
                          onChange={handleChange}
                        />
                        <div className="text-body ml-2">Card</div>
                      </div>
                      <div className="flex-row items-center lg:flex hidden">
                        <Visa />
                        <div className="ml-2">
                          <Mastercard />
                        </div>
                        <div className="ml-2">
                          <Discover />
                        </div>
                        <div className="ml-2">
                          <Amex />
                        </div>
                        <div className="text-caption font-light ml-2">
                          and more...
                        </div>
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={isOpen}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel static className="mt-3 pb-3">
                      <input
                        onChange={handleChange}
                        className="px-3 w-full border border-[#AAAAAA] h-[44px] rounded-sm"
                        placeholder="Card Number"
                        name="card_number"
                      />
                      <input
                        onChange={handleChange}
                        className="px-3 mt-3 w-full border border-[#AAAAAA] h-[44px] rounded-sm"
                        placeholder="Name on card"
                        name="name_on_card"
                      />
                      <div className="grid grid-cols-2 flex pr-3">
                        <div className="col-span-1">
                          <input
                            onChange={handleChange}
                            className="px-3 mt-3 mr-3 w-full border border-[#AAAAAA] h-[44px] rounded-sm"
                            placeholder="Expiration date (MM/YY)"
                            name="expiration_date"
                          />
                        </div>
                        <div className="col-span-1">
                          <input
                            onChange={handleChange}
                            className="px-3 mt-3 ml-3 w-full border border-[#AAAAAA] h-[44px] rounded-sm"
                            placeholder="Security code"
                            name="security_code"
                          />
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              </>
            )}
          </Disclosure>
          <div className="w-full  py-3 border-b border-b-[#AAAAAA] border-dashed">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-row items-center">
                <input
                  name="payment_method"
                  className="radio radio-sm"
                  type="radio"
                  value="shop_pay"
                  onChange={handleChange}
                />
                <div className="text-body ml-2">Shop Pay</div>
              </div>
              <ShopPayLargePurple />
            </div>
          </div>
          <div className="w-full  pt-3">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-row items-center">
                <input
                  name="payment_method"
                  className="radio radio-sm"
                  type="radio"
                  value="paypal"
                  onChange={handleChange}
                />
                <div className="text-body ml-2">Paypal</div>
              </div>
              <PaypalLarge />
            </div>
          </div>
        </div>
        <div className="mt-5 text-heading font-semibold">Billing Address</div>
        <div className="mt-3 text-caption font-light">
          Select the address that matches your card or payment method.
        </div>
        <div className="p-5 border border-[#AAAAAA] border-[0.5px] w-full mt-2 w-full">
          <div className="w-full  pb-3 border-b border-b-[#AAAAAA] border-dashed">
            <div className="flex items-center w-full">
              <div className="flex flex-row items-center">
                <input
                  name="billing_checkbox"
                  className="radio radio-sm"
                  type="radio"
                  value="same"
                  onChange={handleChange}
                />
                <div className="text-body ml-2">Same as shipping address</div>
              </div>
            </div>
          </div>
          <Disclosure defaultOpen={false}>
            {({open}) => (
              <>
                <div>
                  <Disclosure.Button className="w-full pt-3">
                    <div className="flex items-center w-full">
                      <div className="flex flex-row items-center">
                        <input
                          name="billing_checkbox"
                          className="radio radio-sm"
                          type="radio"
                          value="different"
                          onChange={handleChange}
                        />
                        <div className="text-body ml-2">
                          Use a different billing address
                        </div>
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={isAddressOpen}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel static className="mt-3 pb-3">
                      <input
                        onChange={handleChange}
                        className="px-3 w-full border border-[#AAAAAA] h-[44px] rounded-sm"
                        placeholder="Billing Address"
                        name="billing_address"
                      />
                    </Disclosure.Panel>
                  </Transition>
                </div>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mt-5 text-heading font-semibold">Shipping Method</div>
        <div className="flex items-center mt-3 w-full">
          <div className="p-5 border border-[#AAAAAA] border-[0.5px] w-full">
            <div className="flex flex-row items-center">
              <input
                name="is_save_information"
                className="checkbox checkbox-sm"
                type="checkbox"
                onChange={handleChange}
              />
              <div className="text-caption font-light ml-2">
                Save my information for a faster checkout
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={
            isActive
              ? 'mt-5 w-full bg-primary text-white text-heading font-semibold items-center flex justify-center h-[48px] rounded-sm'
              : 'mt-5 w-full text-heading font-semibold items-center flex justify-center btn-disabled h-[48px] rounded-sm'
          }
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
