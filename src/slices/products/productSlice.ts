import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store';
import { Products, State } from './types';
import { RootState } from '../../store/rootReducer';

const apiURL = `http://localhost:8000/api/products`;

const initialState: State = {
  products: [],
  loading: false,
  errors: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setProducts: (state, { payload }: PayloadAction<Products[]>) => {
      state.products = payload;
    },
  },
});

export const fetchProducts = (): AppThunk => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(apiURL);

      dispatch(setLoading(false));
      dispatch(setProducts(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};

export const getProducts = (state: RootState) => state.productsState.products;
export const { setLoading, setErrors, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
