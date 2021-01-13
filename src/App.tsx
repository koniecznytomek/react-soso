import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getBasketHint } from './components/features/Hints/hintsSlice';
import { fetchProducts } from './slices/products/productSlice';

import './styles/global.scss';
import { AnimatePresence } from 'framer-motion';

import Home from './components/views/Home/Home';
import NotFound from './components/views/NotFound/NotFound';
import Main from './components/layout/Main/Main';
import Product from './components/features/Product/Product';
import Checkout from './components/views/Checkout/Checkout';
import Lookbook from './components/views/Lookbook/Lookbook';
import About from './components/views/About/About';
import CartHint from './components/features/Hints/CartHint';
import Collections from './components/views/Collections/Collections';
import { fetchCollections } from './slices/collections/collectionsSlice';
import OrderSummary from './components/views/OrderSummary/OrderSummary';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const hint = useSelector(getBasketHint);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <>
      {hint && <CartHint />}
      <Main>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Home} />
            <Route exact path='/collections' component={Collections} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/about' component={About} />
            <Route exact path='/lookbook' component={Lookbook} />
            <Route exact path='/order/summary' component={OrderSummary} />
            <Route path='*' component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Main>
    </>
  );
}

export default App;
