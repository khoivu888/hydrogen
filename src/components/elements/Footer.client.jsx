import {Link} from '@shopify/hydrogen';
import React from 'react';
import Tags from './Tags.client';
import LogoHeader from '../../assets/LogoHeader';
import {
  Amex,
  Delivery,
  Discover,
  Facebook,
  Instagram,
  Location,
  Mail,
  Mastercard,
  Opay,
  Paypal,
  Printerest,
  Twitter,
  Visa,
  Website,
} from '../../assets/Icon';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer({listFooter, listFooterSecondary}) {
  return (
    <>
      <div className="md:block hidden bg-[#f2f2f6] py-10">
        <div className="px-5 mt-14 container w-[70%]">
          <div className="flex flex-row">
            <div className="w-1/4 order-last">
              <Tags />
            </div>
            <div className="w-1/4">
              <div className="">
                <LogoHeader width={187} height={52} />
              </div>
              <div className="mt-5">
                <div className="flex flex-row mt-1 items-center ">
                  <Delivery />
                  <div className="font-light ml-2 text-primary">
                    Delivery delays due to COVID-19
                  </div>
                </div>
                <div className="flex mt-1  items-center">
                  <Location />
                  <div className="font-light  ml-2 text-[#525252]">
                    30 N Gould St Ste R Sheridan, WY 82801
                  </div>
                </div>
                <div className="flex mt-1  items-center">
                  <Mail />
                  <a
                    href="mailto:contact@chillever.com"
                    className="font-light link-hover ml-2 text-[#525252]"
                  >
                    contact@chillever.com
                  </a>
                </div>
                <div className="flex mt-1  items-center">
                  <Website />
                  <a
                    href="https://chillever.com"
                    className="font-light link-hover ml-2 text-[#525252]"
                  >
                    www.chillever.com
                  </a>
                </div>
                <div className="flex items-center mt-3">
                  <div className="ml-3">
                    <Facebook />
                  </div>
                  <div className="ml-3">
                    <Twitter />
                  </div>
                  <div className="ml-3">
                    <Instagram />
                  </div>
                  <div className="ml-3">
                    <Printerest />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full w-1/2">
              <div className="w-1/2 flex flex-col ">
                <div className="font-bold">Policies</div>
                {listFooter.items.map((item, index) => (
                  <Link
                    key={index}
                    to={
                      item.title === 'DCMA Report'
                        ? item.url
                        : item.url.replace(
                            'https://papa-shops.myshopify.com/',
                            '/',
                          )
                    }
                  >
                    <div className="font-light text-sm text-[#525252] mt-5 link-hover hover:cursor-pointer">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="w-1/2 flex flex-col">
                <div className="font-bold">Need Help</div>
                {listFooterSecondary.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.url.replace(
                      'https://papa-shops.myshopify.com/',
                      '/',
                    )}
                  >
                    <div className="font-light text-sm text-[#525252] mt-5 link-hover">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full border-t mt-10 border-[#AAAAAA]"></div>
          <div className="flex justify-between mt-5 text-sm">
            <div>© GOD GROUP 2022. All Rights Reserved</div>
            <div className="flex flex-row">
              <div className="ml-3">
                <Visa />
              </div>
              <div className="ml-3">
                <Mastercard />
              </div>
              <div className="ml-3">
                <Discover />
              </div>
              <div className="ml-3">
                <Amex />
              </div>
              <div className="ml-3">
                <Paypal />
              </div>
              <div className="ml-3">
                <Opay />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="px-5 mt-5">
          <Tags />
          <div className="mt-10">
            <LogoHeader width={187} height={52} />
          </div>
          <div className="mt-3">
            <div className="flex flex-row mt-1 items-center ">
              <Delivery />
              <div className="font-light ml-2 text-primary">
                Delivery delays due to COVID-19
              </div>
            </div>
            <div className="flex mt-1  items-center">
              <Location />
              <div className="font-light  ml-2 text-[#525252]">
                30 N Gould St Ste R Sheridan, WY 82801
              </div>
            </div>
            <div className="flex mt-1  items-center">
              <Mail />
              <a
                href="mailto:contact@chillever.com"
                className="font-light link-hover ml-2 text-[#525252]"
              >
                contact@chillever.com
              </a>
            </div>
            <div className="flex mt-1  items-center">
              <Website />
              <a
                href="https://chillever.com"
                className="font-light link-hover ml-2 text-[#525252]"
              >
                www.chillever.com
              </a>
            </div>
            <div className="flex items-center mt-3">
              <div className="ml-3">
                <Facebook />
              </div>
              <div className="ml-3">
                <Twitter />
              </div>
              <div className="ml-3">
                <Instagram />
              </div>
              <div className="ml-3">
                <Printerest />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="w-1/2 flex flex-col mt-4">
              <div className="font-bold">Policies</div>
              {listFooter.items.map((item, index) => (
                <Link
                  key={index}
                  to={
                    item.title === 'DCMA Report'
                      ? item.url
                      : item.url.replace(
                          'https://papa-shops.myshopify.com/',
                          '/',
                        )
                  }
                >
                  <div className="font-light text-sm text-[#525252] text-sm text-[#525252] mt-2 link-hover">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-1/2 flex flex-col mt-4">
              <div className="font-bold">Need Help</div>
              {listFooterSecondary.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.url.replace(
                    'https://papa-shops.myshopify.com/pages/',
                    '/',
                  )}
                >
                  <div className="font-light text-sm text-[#525252] mt-2 link-hover">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
