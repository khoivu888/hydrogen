import React from 'react';
import {SuccessPayment, Visa} from '../../assets/Icon';
import {useAtom} from 'jotai';
import {address, billingAddress, email} from '../../atom/variants';
import {totalPay} from '../../atom/cart';
import {Link} from '@shopify/hydrogen';

export default function ThankYou() {
  const emailUser = useAtom(email);
  const addressUser = useAtom(address);
  const billing = useAtom(billingAddress);
  const total = useAtom(totalPay);

  return (
    <div className="mt-5">
      <div className="bg-[#0CD12E]/[.1] py-10">
        <div className="flex justify-center ">
          <SuccessPayment />
        </div>
        <div className="text-title-6 font-semibold text-center">
          Your order is confirmed
        </div>
        <div className="text-caption font-light text-center  mt-5">
          You'll receive an email when your order is ready.{' '}
          <Link to={'/track-your-orders'}>
            <span className="text-primary underline">
              Track order with shop
            </span>
          </Link>
        </div>
        <div className="flex flex-col w-full "></div>
      </div>
      <div className="mt-5 bg-[#F5F5F5] p-5">
        <div className="font-semibold text-heading">Order Updates</div>
        <div className="mt-3 font-light text-caption">
          You'll get shipping and delivery updates by email.
        </div>
      </div>
      <div className="mt-5 bg-[#F5F5F5] p-5">
        <div className="font-semibold text-heading">Customer Information</div>
        <div className="grid lg:grid-cols-2 grid-cols-1 flex">
          <div className="col-span-1">
            <div className="mt-3 font-light text-caption flex flex-col">
              <div className="font-medium">Contact:</div>
              <div>{emailUser ? emailUser : null}</div>
            </div>
            <div className="mt-5 font-light text-caption flex flex-col">
              <div className="font-medium">Ship to:</div>
              <div>{addressUser ? addressUser : null}</div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mt-3 font-light text-caption flex flex-col">
              <div className="font-medium">Payment method:</div>
              <div className="flex items-center">
                <Visa />
                <span className="ml-2"> ending with 0280 - ${total}</span>
              </div>
            </div>
            <div className="mt-5 font-light text-caption flex flex-col">
              <div className="font-medium">Billing Address:</div>
              <div>{billing ? billing : null}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
