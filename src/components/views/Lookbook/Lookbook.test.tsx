import React from 'react';
import { shallow } from 'enzyme';
import Lookbook from './Lookbook';
import { Provider } from 'react-redux';
import store from '../../../store/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Lookbook />
    </Provider>
  );
});
