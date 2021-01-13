import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from './types';
import { RootState } from '../../store/rootReducer';

const initialState: Theme = {
  mode: ''
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const getTheme = (state: RootState) => state.themeState.mode;
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
