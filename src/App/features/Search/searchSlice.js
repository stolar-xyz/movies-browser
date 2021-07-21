import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    result: [],
    activePath: '',
    query: '',
    status: 'initial',
    open: false,
  },
  reducers: {
    fetchSearch: state => {
      state.status = 'loading';
    },
    fetchSearchSuccess: (state, { payload }) => {
      state.result = payload.results;
      state.status = 'success';
    },
    fetchSearchError: state => {
      state.status = 'error';
    },
    setActiveSearchPath: (state, { payload }) => {
      state.activePath = payload;
      state.status = 'loading';
    },
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    toggleOpen: state => {
      state.open = !state.open;
    },
  },
});

export const {
  fetchSearch,
  fetchSearchSuccess,
  fetchSearchError,
  setActiveSearchPath,
  setQuery,
  toggleOpen,
} = searchSlice.actions;

export const selectResult = state => state.search.result;
export const selectQuery = state => state.search.query;
export const selectStatus = state => state.search.status;
export const selectOpen = state => state.search.open;

export default searchSlice.reducer;
