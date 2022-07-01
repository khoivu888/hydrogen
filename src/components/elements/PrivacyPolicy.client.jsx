import React, {useRef} from 'react';

export default function PrivacyPolicy() {
  const executeScroll = (ref) => ref.current.scrollIntoView();

  return (
    <>
      <div className="mt-5 text-heading font-semibold">Privacy Policy</div>
      <div className="flex grid grid-cols-5 mt-2">
        <div className="col-span-1 hidden lg:flex flex-col text-body font-light">
          <a className="py-2 link-hover hover:cursor-pointer">
            Personal information we collect
          </a>
          <a className="py-2 link-hover hover:cursor-pointer">
            How do we use your personal information?
          </a>
          <a className="py-2 link-hover hover:cursor-pointer">
            Sharing your personal Information
          </a>
          <a className="py-2 link-hover hover:cursor-pointer">
            Behavioural advertising
          </a>
          <a className="py-2 link-hover hover:cursor-pointer">Do not track</a>
          <a className="py-2 link-hover hover:cursor-pointer">Your rights</a>
          <a className="py-2 link-hover hover:cursor-pointer">Data retention</a>
          <a className="py-2 link-hover hover:cursor-pointer">Changes</a>
          <a className="py-2 link-hover hover:cursor-pointer">Contact us</a>
        </div>
        <div className="lg:col-span-4 col-span-5 lg:ml-5 ml-0">
          <div className="text-body font-light">
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
            chillever.com (the “Site”).
          </div>
          <div className="mt-5 text-primary text-heading font-semibold">
            Personal information we collect
          </div>
          <div className="text-body font-light mt-5">
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information”.
          </div>
          <div className="text-body font-light mt-5">
            We collect Device Information using the following technologies:
          </div>
          <div className="text-body font-light mt-5">
            - “Cookies” are data files that are placed on your device or
            computer and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit
            http://www.allaboutcookies.org.
          </div>
          <div className="text-body font-light mt-5">
            - “Log files” track actions occurring on the Site, and collect data
            including your IP address, browser type, Internet service provider,
            referring/exit pages, and date/time stamps.
          </div>
          <div className="text-body font-light mt-5">
            - “Web beacons”, “tags”, and “pixels” are electronic files used to
            record information about how you browse the Site.
          </div>
          <div className="text-body font-light mt-5">
            Additionally when you make a purchase or attempt to make a purchase
            through the Site, we collect certain information from you, including
            your name, billing address, shipping address, payment information
            (including credit card numbers), email address, and phone number. We
            refer to this information as “Order Information”.
          </div>
          <div className="text-body font-light mt-5">
            When we talk about “Personal Information” in this Privacy Policy, we
            are talking both about Device Information and Order Information.
          </div>
          <div className="mt-5 text-primary text-heading font-semibold">
            How do we use your personal information?
          </div>
          <div className="text-body font-light mt-5">
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site (including processing your
            payment information, arranging for shipping, and providing you with
            invoices and/or order confirmations). Additionally, we use this
            Order Information to:
          </div>
          <div className="text-body font-light mt-5">
            - Communicate with you
          </div>
          <div className="text-body font-light mt-5">
            - Screen our orders for potential risk or fraud; and
          </div>
          <div className="text-body font-light mt-5">
            - When in line with the preferences you have shared with us, provide
            you with information or advertising relating to our products or
            services.
          </div>
          <div className="text-body font-light mt-5">
            We use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns).
          </div>
          <div className="mt-5 text-primary text-heading font-semibold">
            Sharing your personal information
          </div>
          <div className="text-body font-light mt-5">
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. For example, we use
            Shopify to power our online store--you can read more about how
            Shopify uses your Personal Information here:
            https://www.shopify.com/legal/privacy. We also use Google Analytics
            to help us understand how our customers use the Site -- you can read
            more about how Google uses your Personal Information here:
            <div className="text-body font-light mt-5">
              https://www.google.com/intl/en/policies/privacy/. You can also
              opt-out of Google Analytics here:
              https://tools.google.com/dlpage/gaoptout.
            </div>
            <div className="text-body font-light mt-5">
              Finally, we may also share your Personal Information to comply
              with applicable laws and regulations, to respond to a subpoena,
              search warrant or other lawful request for information we receive,
              or to otherwise protect our rights.{' '}
            </div>
            <div className="mt-5 text-primary text-heading font-semibold">
              Behavioural advertising
            </div>
            <div className="text-body font-light mt-5">
              As described above, we use your Personal Information to provide
              you with targeted advertisements or marketing communications we
              believe may be of interest to you. For more information about how
              targeted advertising works, you can visit the Network Advertising
              Initiative’s (“NAI”) educational page at
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </div>
            <div className="text-body font-light mt-5">
              You can opt out of targeted advertising by using the links below:
            </div>
            <div className="text-body font-light mt-5">
              - Facebook: https://www.facebook.com/settings/?tab=ads
            </div>
            <div className="text-body font-light mt-5">
              - Google: https://www.google.com/settings/ads/anonymous
            </div>
            <div className="text-body font-light mt-5">
              - Bing:
              https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
            </div>
            <div className="text-body font-light mt-5">
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:
              http://optout.aboutads.info/.
            </div>
            <div className="mt-5 text-primary text-heading font-semibold">
              Do not track
            </div>
            <div className="text-body font-light mt-5">
              Please note that we do not alter our Site’s data collection and
              use practices when we see a Do Not Track signal from your browser.
            </div>
            <div className="mt-5 text-primary text-heading font-semibold">
              Your rights
            </div>
            <div className="text-body font-light mt-5">
              If you are a European resident, you have the right to access
              personal information we hold about you and to ask that your
              personal information be corrected, updated, or deleted. If you
              would like to exercise this right, please contact us through the
              contact information below.
            </div>
            <div className="text-body font-light mt-5">
              Additionally, if you are a European resident we note that we are
              processing your information in order to fulfill contracts we might
              have with you (for example if you make an order through the Site),
              or otherwise to pursue our legitimate business interests listed
              above. Additionally, please note that your information will be
              transferred outside of Europe, including to Canada and the United
              States.
            </div>
            <div className="mt-5 text-primary text-heading font-semibold">
              Data retention
            </div>
            <div className="text-body font-light mt-5">
              When you place an order through the Site, we will maintain your
              Order Information for our records unless and until you ask us to
              delete this information.
            </div>
            <div className="mt-5 text-primary text-heading font-semibold">
              Changes
            </div>
            <div className="text-body font-light mt-5">
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons.
            </div>
            <div className="mt-5 text-primary text-heading font-semibold">
              Contact us
            </div>
            <div className="text-body font-light mt-5">
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by e‑mail at{' '}
              <a href="mailto:contact@chillerver.com" className="text-primary">
                contact@chillever.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
