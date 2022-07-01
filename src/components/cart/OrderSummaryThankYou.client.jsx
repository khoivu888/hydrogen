import React, {useEffect, useState} from 'react';
import {useAtom} from 'jotai';
import {cartItem, totalItems, totalPay, totalPrice} from '../../atom/cart';
import {Edit, PreviewDesign} from '../../assets/Icon';
import {Button} from 'antd';
import {shippingFee} from '../../atom/variants';

export default function OrderSummaryThankYou() {
  const cart = useAtom(cartItem)[0];
  const [data, setData] = useState({});
  const shipping = useAtom(shippingFee);
  const [total, setTotal] = useAtom(totalPrice);
  const [totalItem, setTotalItem] = useAtom(totalItems);
  const [totalPayment, setTotalPayment] = useAtom(totalPay);

  const countTotal = () => {
    let sum = 0;
    let sumItem = 0;
    cart.forEach((item) => {
      sum += item.priceAllItem;
      sumItem += item.number;
    });
    setTotal(Number(sum.toFixed(2)));
    setTotalItem(sumItem);
    setTotalPayment(
      (
        Number(sum) +
        Number(sum / 10) +
        Number(typeof shipping[0] !== 'number' ? 0 : shipping[0])
      ).toFixed(2),
    );
  };

  useEffect(() => {
    countTotal();
  }, [cart, shipping]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({...values, [name]: value}));
  };

  return (
    <div className="mt-5 lg:px-0 px-5">
      <div className="border-b-[0.5px] border-dashed border-b-[#AAAAAA] pb-5">
        <div className="text-title-6 font-semibold">Order Summary</div>
        {cart.map((item, index) => (
          <div key={index} className="mt-5 h-[100px]  rounded w-full ">
            <div className="flex flex-row lg:py-[12px] grid lg:grid-cols-8 grid-cols-4 lg:px-[12px]">
              <div className="relative col-span-1">
                <img
                  className="lg:w-[84px] lg:h-[84px] h-[70px] w-[70px]"
                  src={item.image}
                />
                <div className="absolute rounded-full text-center top-0 right-0 w-[21px] h-[21px] bg-primary text-white">
                  {item.number}
                </div>
              </div>
              <div className="flex flex-col lg:col-span-7 col-span-3 ml-5">
                <span className="text-heading font-normal truncate">
                  {item.title}
                </span>
                <div className="mt-5 w-full flex justify-between items-center">
                  <div className="font-light text-body">
                    Color: <span className="font-semibold">{item.color}</span>,
                    Size: <span className="font-semibold">{item.size}</span>
                    {item.productType ? (
                      <>
                        {''}, Product Type:{' '}
                        <span className="font-semibold">
                          {item.productType}
                        </span>
                      </>
                    ) : null}
                  </div>
                  <div className="text-primary text-body">
                    ${item.number === 1 ? item.price : item.priceAllItem}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="text-caption font-light">
            Subtotal: {totalItem} items
          </div>
          <div className="text-caption font-medium">${total}</div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between">
          <div className="text-caption font-light">Shipping</div>
          <div className="text-caption font-medium">${shipping}</div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between">
          <div className="text-caption font-light">Estimated taxes</div>
          <div className="text-caption font-medium">
            ${(total / 10).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="mt-5 px-5 border-t border-t-[0.5px] border-t-[#AAAAAA]" />
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="text-heading font-semibold">Total</div>
          <div className="text-heading font-semibold">${totalPayment} </div>
        </div>
      </div>
    </div>
  );
}
