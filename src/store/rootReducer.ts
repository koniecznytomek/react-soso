import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from '../slices/theme/themeSlice';
import cartReducer from '../slices/cart/cartSlice';
import productsReducer from '../slices/products/productSlice';
import hintsReducer from './../components/features/Hints/hintsSlice'
import orderReducer from '../slices/order/orderSlice';
import collectionsReducer from '../slices/collections/collectionsSlice';

const rootReducer = combineReducers({
  themeState: themeReducer,
  cartState: cartReducer,
  productsState: productsReducer,
  hintsState: hintsReducer,
  orderState: orderReducer,
  collectionsState: collectionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
