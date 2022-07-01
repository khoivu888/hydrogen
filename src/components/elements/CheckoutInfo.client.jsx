import LogoHeader from '../../assets/LogoHeader';
import React, {useState} from 'react';
import {Steps, Tabs} from 'antd';
import {GPayLarge, PaypalLarge, ShopPayLarge} from '../../assets/Icon';
import Information from './Information';
import {useAtom} from 'jotai';
import {activeStep} from '../../atom/variants';
import {Shipping} from '../../assets/PoliciesIcon';
import CheckoutShipping from './Shipping.client';
import Payment from './Payment.client';
import {Link} from '@shopify/hydrogen';

const {Step} = Steps;
const {TabPane} = Tabs;

export default function CheckoutInfo() {
  const [step, setStep] = useAtom(activeStep);
  return (
    <>
      <div className="mt-5 w-full">
        <Steps
          className="text-primary"
          labelPlacement="vertical"
          size={'small'}
          current={step}
        >
          <Step className="font-bold" title="Information" />
          <Step title="Shipping" />
          <Step title="Payment" />
        </Steps>
      </div>
      <Tabs activeKey={`${step}`}>
        <TabPane key="0">
          <Information />
        </TabPane>
        <TabPane key="1">
          <CheckoutShipping />
        </TabPane>
        <TabPane key="2">
          <Payment />
        </TabPane>
      </Tabs>
    </>
  );
}
