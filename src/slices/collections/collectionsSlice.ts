import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store';
import { Collections, State } from './types';
import { RootState } from '../../store/rootReducer';

let apiURL: string;
const hostname = window && window.location && window.location.hostname;

if (hostname === process.env.REACT_APP_API_HOST) {
  apiURL = `${process.env.REACT_APP_API_URL}/collections`;
} else {
  apiURL = 'http://localhost:8000/api/collections';
}

const initialState: State = {
  collections: [],
  loading: false,
  errors: '',
};

const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setCollections: (state, { payload }: PayloadAction<Collections[]>) => {
      state.collections = payload;
    },
  },
});

export const fetchCollections = (): AppThunk => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(apiURL);

      dispatch(setLoading(false));
      dispatch(setCollections(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};

export const getCollections = (state: RootState) =>
  state.collectionsState.collections;
export const {
  setLoading,
  setErrors,
  setCollections,
} = collectionsSlice.actions;
export default collectionsSlice.reducer;
