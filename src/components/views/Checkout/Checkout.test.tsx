import React from 'react';
import { shallow } from 'enzyme';
import Checkout from './Checkout';

import { Provider } from 'react-redux';
import store from '../../../store/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Checkout />
    </Provider>
  );
});
