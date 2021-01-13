import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store';
import { Order, State } from './types';
import { cleanCart } from '../cart/cartSlice';

const apiURL = `http://localhost:8000/api/orders/order`;

const initialState: State = {
  loading: false,
  errors: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },
  },
});

export const sendOrder = (data: Order): AppThunk => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      await axios.post(apiURL, data).then(() => {
        dispatch(setLoading(false));
        dispatch(cleanCart());
      });
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};

export const { setLoading, setErrors } = orderSlice.actions;
export default orderSlice.reducer;
