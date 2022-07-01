import React, {useState} from 'react';
import Contact from './Contact';
import {Warning} from '../../assets/Icon';
import Breadcrumb from './Breadcrumb';
import {STORE_DOMAIN} from '../../../hydrogen.config';
import axios from 'axios';
import {get} from 'lodash';
import OrdersTracking from './OrdersTracking.client';
import {Oval, TailSpin} from 'react-loader-spinner';

export default function TrackOrderClient() {
  const [data, setData] = useState({});
  const [focus, setFocus] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataResponse, setDataResponse] = useState(null);
  const [notFoundOrder, setNotFoundOrder] = useState(false);

  const handleFocus = (event) => {
    setFocus(event.target.name);
  };

  const handleChange = (event) => {
    setData({
      emailOrPhone: event.target.value,
      store: STORE_DOMAIN,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    !dataResponse ? setLoading(true) : setLoading(false);
    axios
      .post('https://tracking.podlovers.com/track-your-order', data)
      .then((response) => {
        setDataResponse(response);
        if (!response.data.data.data) {
          setNotFoundOrder(true);
          setDataResponse(null);
        } else {
          setNotFoundOrder(false);
        }
      });
  };
  const dataOrders = get(dataResponse, 'data.data.data', []);
  return (
    <>
      <Breadcrumb firstTitle={'Track Your Order'} />
      {!dataResponse || notFoundOrder ? (
        <div className="items-center md:text-center md:mt-0 mt-10 md:px-0 w-full">
          <div className="text-title-5 font-semibold">Track Your Order</div>
          <form onSubmit={handleSubmit}>
            <div className="md:w-[506px] w-full md:mt-5 mt-10 mx-auto">
              <input
                name="emailOrPhone"
                onFocus={handleFocus}
                onChange={handleChange}
                placeholder="Email or Phone No."
                className={
                  focus === 'emailOrPhone'
                    ? 'input placeholder:text-[#AAAAAA] border-primary rounded-none bg-[#F5F5F5] w-full mt-5'
                    : 'input placeholder:text-[#AAAAAA] focus:border-none border-none rounded-none bg-[#F5F5F5] w-full '
                }
                autoFocus
              />
              <div className="mt-1">
                {focus === 'emailOrPhone' ? (
                  <small className="text-primary flex items-center">
                    <div className="mr-1">
                      <Warning />
                    </div>
                    youremail@gmail.com Or 508-546-321
                  </small>
                ) : (
                  <></>
                )}
              </div>
              {notFoundOrder ? (
                <div className="text-primary mt-5">
                  Can't Find Orders Please Check Your Information
                </div>
              ) : null}
              <button
                type="submit"
                className="btn bg-primary items-center w-full mt-5 border-none rounded-none"
              >
                <span className="mr-3">Track Order</span>
                {loading && !notFoundOrder ? (
                  <TailSpin
                    height="20"
                    width="20"
                    color="white"
                    ariaLabel="loading"
                  />
                ) : null}
              </button>
              <small className="mt-2 text-left">
                NOTE: You can only check the status of your order on our system
                after 12 hours of purchase.
              </small>
            </div>
          </form>
        </div>
      ) : (
        <OrdersTracking dataOrders={dataOrders} />
      )}
      <Contact />
    </>
  );
}
