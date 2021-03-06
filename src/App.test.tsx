import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
