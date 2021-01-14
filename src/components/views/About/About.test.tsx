import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

import { Provider } from 'react-redux';
import store from '../../../store/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <About />
    </Provider>
  );
});
