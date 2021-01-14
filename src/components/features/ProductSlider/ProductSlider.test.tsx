import React from 'react';
import { shallow } from 'enzyme';
import ProductSlider from './ProductSlider';
import { Provider } from 'react-redux';
import store from '../../../store/store';

const slider = [
  {
    src: 'image.jpg',
    alt: 'alt text',
  },
];

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <ProductSlider slider={slider} />
    </Provider>
  );
});
