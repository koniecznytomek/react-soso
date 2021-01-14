import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';
import { Provider } from 'react-redux';
import store from '../../../store/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
});
