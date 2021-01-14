import React from 'react';
import { shallow } from 'enzyme';
import Collection from './Collection';
import { Provider } from 'react-redux';
import store from '../../../store/store';

const collection = {
  name: 'so1',
  price: 10,
  series: 'rainbow',
  image: 'image.jpg',
};

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Collection {...collection} />
    </Provider>
  );
});
