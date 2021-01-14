import React from 'react';
import { shallow } from 'enzyme';
import Basket from './Basket';

import { Provider } from 'react-redux';
import store from '../../../store/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Basket counter={1} />
    </Provider>
  );
});
