import {defineConfig} from '@shopify/hydrogen/config';
// import {
//   CookieSessionStorage,
//   PerformanceMetricsServerAnalyticsConnector,
// } from '@shopify/hydrogen';

export const STORE_DOMAIN = 'papa-shops.myshopify.com';

export default defineConfig({
  shopify: () => ({
    storeDomain: STORE_DOMAIN,
    storefrontToken: 'd41458a37d426d3176fa19defed86d93',
    storefrontApiVersion: '2022-04',
  }),
  // session: CookieSessionStorage('__session', {
  //   path: '/',
  //   httpOnly: true,
  //   secure: import.meta.env.PROD,
  //   sameSite: 'strict',
  //   maxAge: 60 * 60 * 24 * 30,
  // }),
  // serverAnalyticsConnectors: [PerformanceMetricsServerAnalyticsConnector],
});
