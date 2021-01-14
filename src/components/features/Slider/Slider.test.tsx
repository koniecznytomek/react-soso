import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';
import { Provider } from 'react-redux';
import store from '../../../store/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Slider />
    </Provider>
  );
});
