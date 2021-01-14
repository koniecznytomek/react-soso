import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

import { Provider } from 'react-redux';
import store from '../../../store/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Nav />
    </Provider>
  );
});
