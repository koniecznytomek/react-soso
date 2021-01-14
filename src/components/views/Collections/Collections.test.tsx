import React from 'react';
import { shallow } from 'enzyme';
import Collections from './Collections';
import { Provider } from 'react-redux';
import store from '../../../store/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Collections />
    </Provider>
  );
});
