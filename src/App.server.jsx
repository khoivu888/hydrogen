import renderHydrogen from '@shopify/hydrogen/entry-server';
import {FileRoutes, Route, Router, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import DefaultSeo from './components/elements/DefaultSeo.server';
import NotFound from './components/elements/NotFound.server';
import LoadingFallback from './components/elements/LoadingFallback';
import CartProvider from './components/cart/CartProvider.client';

function App() {
  return (
    <div className="font-poppins">
      <Suspense fallback={<LoadingFallback />}>
        <ShopifyProvider>
          <CartProvider>
            <DefaultSeo />
            <Router>
              <FileRoutes />
              <Route path="*" page={<NotFound />} />
            </Router>
          </CartProvider>
        </ShopifyProvider>
      </Suspense>
    </div>
  );
}

export default renderHydrogen(App);
