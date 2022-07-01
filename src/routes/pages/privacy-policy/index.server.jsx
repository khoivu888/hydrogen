import Layout from '../../../components/Layout/Layout.server';
import Breadcrumb from '../../../components/elements/Breadcrumb';
import React, {useRef} from 'react';
import PrivacyPolicy from '../../../components/elements/PrivacyPolicy.client';

export default function Index({query}) {
  return (
    <Layout query={query}>
      <div className="lg:w-[70%] w-full container lg:px-0 px-5">
        <Breadcrumb firstTitle={'Privacy Policy'} />
        <PrivacyPolicy />
      </div>
    </Layout>
  );
}
