import React from 'react';
import {MailSolid} from '../../assets/Icon';

export default function Contact() {
  return (
    <>
      <div className="text-center mt-10 pb-5 items-center w-full px-3 bg-[#EDEDF2]">
        <div className="font-semibold pt-5">JOIN OUR MAILING LIST</div>
        <div className="font-light text-xs pt-2">
          Get update about new product, releases, promotions and get 10% off
          your first order
        </div>
        <div className="form-control mt-3 items-center w-full relative">
          <div className="flex flex-wrap border border-[#C3CAD9]  mb-2 relative">
            <div className="flex">
              <span className="flex items-center leading-normal bg-white px-3 rounded-none whitespace-no-wrap text-grey-dark text-sm">
                <MailSolid />
              </span>
            </div>
            <input
              type="text"
              className="flex pl-2 lg:pr-20 pr-2 relative leading-normal h-10 focus:border-blue focus:shadow"
              placeholder="Your Email"
            />
            <div className="flex ">
              <div className="flex items-center leading-normal bg-white whitespace-no-wrap  ">
                <button className="btn-wide lg:w-[200px] w-[80px] rounded border-none normal-case btn-sm text-white bg-[#D71920] lg:text-sm text-caption lg:mr-1 mr-1 lg:m-1 m-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2  text-2xs text-[#525252]">
          By clicking submit, I confirm I want to receive emails from GOD GROUP
        </div>
      </div>
    </>
  );
}
