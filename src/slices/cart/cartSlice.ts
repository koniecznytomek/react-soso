import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, Cart } from './types';
import { RootState } from '../../store/rootReducer';

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Cart>) => {
      const item = state.cart.find(
        item => item.name === payload.name && item.size === payload.size
      );
      if (item) {
        state.cart = state.cart.map(item =>
          item.name === payload.name && item.size === payload.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart.push(payload);
      }
    },
    deleteFromCart: (
      state,
      { payload }: PayloadAction<{ name: string; size: string }>
    ) => {
      state.cart = state.cart.filter(item =>
        item.name === payload.name && item.size === payload.size
          ? item.name !== payload.name
          : item
      );
    },
    cleanCart: (state) => {
      state.cart = [];
    },
    increase: (
      state,
      { payload }: PayloadAction<{ name: string; size: string }>
    ) => {
      state.cart = state.cart.map(item =>
        item.name === payload.name && item.size === payload.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrease: (
      state,
      { payload }: PayloadAction<{ name: string; size: string }>
    ) => {
      const item = state.cart.find(
        item => item.name === payload.name && item.size === payload.size
      );
      if (item && item.quantity > 1) {
        state.cart = state.cart.map(item =>
          item.name === payload.name && item.size === payload.size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
  },
});

export const getCart = (state: RootState) => state.cartState.cart;

export const priceSummary = (state: RootState) =>
  state.cartState.cart.length &&
  state.cartState.cart
    .map(item => item.price * item.quantity)
    .reduce((a, b) => a + b);

export const socksSummary = (state: RootState) =>
  state.cartState.cart.length > 0 &&
  state.cartState.cart.map(item => item.quantity).reduce((a, b) => a + b);

export const {
  addToCart,
  deleteFromCart,
  cleanCart,
  increase,
  decrease,
} = cartSlice.actions;
export default cartSlice.reducer;
