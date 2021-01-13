import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hints } from './types';
import { RootState } from '../../../store/rootReducer';

const initialState: Hints = {
  basket: true,
  slider: true,
};

const hintsSlice = createSlice({
  name: 'hints',
  initialState,
  reducers: {
    setBasketHint: (state, action: PayloadAction<boolean>) => {
      state.basket = action.payload;
    },
    setSliderHint: (state, action: PayloadAction<boolean>) => {
      state.slider = action.payload;
    },
  },
});

export const getBasketHint = (state: RootState) => state.hintsState.basket;
export const getSliderHint = (state: RootState) => state.hintsState.slider;

export const { setBasketHint, setSliderHint } = hintsSlice.actions;
export default hintsSlice.reducer;
