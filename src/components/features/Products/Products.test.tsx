import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';
import { Provider } from 'react-redux';
import store from '../../../store/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Products />
    </Provider>
  );
});
