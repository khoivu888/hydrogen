import React, {useState} from 'react';
import {Head, Link} from '@shopify/hydrogen';
import Layout from '../../../components/Layout/Layout.server';
import {
  Facebook,
  Instagram,
  Location,
  LocationPrimary,
  MailPrimary,
  Printerest,
  Twitter,
  WebsitePrimary,
} from '../../../assets/Icon';
import ContactForm from '../../../components/elements/ContactForm.client';
import Contact from '../../../components/elements/Contact';
import Breadcrumb from '../../../components/elements/Breadcrumb';

export default function ContactUs({query}) {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout query={query}>
        <div className="container w-[70%] mb-12">
          <Breadcrumb firstTitle={'Contact Us'} />
          <div className="mt-10 w-full grid md:grid-cols-10 grid-cols-1 flex">
            <div className="md:col-span-4 col-span-1 mr-5">
              <div className="text-xl font-bold">Contact Us</div>
              <div className="mt-5">
                Our team is just a click away and will always be happy to help!
              </div>
              <div className="text-lg text-primary">
                We'd love to hear from you!
              </div>
              <div className="mt-10">
                <div className="flex items-center mt-3">
                  <LocationPrimary />
                  <span className="ml-3">
                    30 N Gould St Ste Sheridan, WY 82801
                  </span>
                </div>
                <div className="flex items-center mt-3">
                  <MailPrimary />
                  <a
                    href="mailto:contact@godmerch.com"
                    className="ml-3  link-hover"
                  >
                    contact@godmerch.com
                  </a>
                </div>
                <div className="flex items-center mt-3">
                  <WebsitePrimary />
                  <a href="https://godmerch.com" className="ml-3  link-hover">
                    godmerch.com
                  </a>
                </div>
                <div className="flex flex-row mt-3 items-center">
                  <div className="mr-3">
                    <Facebook />
                  </div>
                  <div className="mr-3">
                    <Twitter />
                  </div>
                  <div className="mr-3">
                    <Instagram />
                  </div>
                  <div className="mr-3">
                    <Printerest />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-1">
              <ContactForm />
            </div>
          </div>
          <Contact />
        </div>
      </Layout>
    </>
  );
}
