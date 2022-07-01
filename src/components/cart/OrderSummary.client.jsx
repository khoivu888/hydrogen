import {
  DeliveryTruck,
  DeliveryTruckSmall,
  Edit,
  PreviewDesign,
} from '../../assets/Icon';
import {useAtom} from 'jotai';
import {cartItem, totalPrice} from '../../atom/cart';
import React, {useState} from 'react';
import {Link} from '@shopify/hydrogen';
import {Image} from 'antd';
import EditModal from '../elements/EditModal';

export default function OrderSummary() {
  const cartItems = useAtom(cartItem);
  const items = cartItems[0];
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [total, setTotal] = useAtom(totalPrice);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="w-full">
        <span className="text-title-6 font-semibold">Order Summary</span>
        <div className="mt-5 py-3 lg:px-5 px-0 lg:ml-3 ml-0  w-full justify-between flex bg-[#0CD12E]/[.05]">
          <div className="flex flex-row">
            <div className="lg:block hidden">
              <DeliveryTruck />
            </div>
            <div className="lg:hidden block">
              <DeliveryTruckSmall />
            </div>
            <div className="flex flex-col ml-5">
              <span className="lg:text-heading text-caption">Shipping fee</span>
              {total ? (
                <div className="text-caption mt-2 flex flex-wrap">
                  {' '}
                  {Number(total) > 100 ? (
                    <>
                      ENJOY YOUR{' '}
                      <span className="text-primary">FREE SHIPPING</span>
                    </>
                  ) : (
                    <>
                      Buy
                      <span className="text-primary mx-1">
                        {100 - Number(total)}$
                      </span>
                      more to enjoy
                      <span className="text-primary lg:mx-2 mx-1">
                        FREE SHIPPING
                      </span>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <div className="flex flex-row text-caption mt-2">
                    Buy <span className="text-primary mx-2">100$</span> more to
                    enjoy{' '}
                    <span className="text-primary lg:mx-2 mx-1">
                      FREE SHIPPING
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          <Link to="/best-selling">
            <div className="lg:my-auto lg:text-body text-caption text-primary">
              Shop now
            </div>
          </Link>
        </div>
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="mt-5 lg:pr-0 pr-5 h-[177px] lg:border-[0.5px] border-none border-[#AAAAAA] rounded w-full"
            >
              <div className="flex grid lg:grid-cols-7 grid-cols-4 lg:py-[12px] lg:px-[12px]">
                <Image
                  alt={item.title}
                  className="lg:w-[153px] lg:h-[153px] h-[103px] w-[103px] col-span-1"
                  src={item.image}
                  preview={{
                    src: item.image,
                  }}
                />
                <div className="flex flex-col w-full ml-5 lg:col-span-6 col-span-3">
                  <Link
                    className="text-heading font-normal truncate"
                    to={`/product/${item.handle}`}
                  >
                    <span className="">{item.title}</span>
                  </Link>
                  <div className="mt-5 w-full flex grid lg:grid-cols-2 grid-cols-1 items-center">
                    <div className="font-light col-span-1 text-body">
                      Color: <span className="font-semibold">{item.color}</span>
                      , Size: <span className="font-semibold">{item.size}</span>{' '}
                      {item.productType ? (
                        <>
                          {''}, Product Type:{' '}
                          <span className="font-semibold">
                            {item.productType}
                          </span>
                        </>
                      ) : null}
                    </div>
                    <div className="flex lg:flex-row flex-row-reverse col-span-1 justify-between items-center">
                      <div>
                        Amount: <span className="font-bold">{item.number}</span>
                      </div>
                      <div className="text-primary">
                        ${item.number === 1 ? item.price : item.priceAllItem}
                      </div>
                    </div>
                  </div>
                  <div className="lg:mt-8 mt-3 flex flex-row text-primary items-center text-body">
                    <div className="flex flex-row mr-5">
                      <div className="mr-2">
                        <PreviewDesign />
                      </div>
                      Preview design
                    </div>
                    <div onClick={() => showModal()} className="flex flex-row">
                      <div className="mr-2">
                        <Edit />
                      </div>
                      Edit
                    </div>
                  </div>
                </div>
              </div>
              <EditModal
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                product={item.product}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
