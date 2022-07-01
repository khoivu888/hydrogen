import React from 'react';

export default function OrdersTracking({dataOrders}) {
  return (
    <>
      {dataOrders?.map((order) => (
        <>
          <div className="text-title-5 font-semibold text-center">
            Track Your Order
          </div>
          <div className="text-body">
            Order <span className="font-semibold">{order.metadata.name}</span>
          </div>
        </>
      ))}
    </>
  );
}
