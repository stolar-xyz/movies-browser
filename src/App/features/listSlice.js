import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    result: [],
    totalPages: null,
    status: 'initial',
  },
  reducers: {
    fetchList: state => {
      state.status = 'loading';
    },
    fetchListSuccess: (state, { payload }) => {
      state.status = 'success';
      state.result = payload.results;
      state.totalPages = payload.total_pages;
    },
    fetchListError: state => {
      state.status = 'error';
    },
  },
});

export const { fetchList, fetchListSuccess, fetchListError } =
  listSlice.actions;

export const selectResult = state => state.list.result;
export const selectStatus = state => state.list.status;
export const selectTotalPages = state => state.list.totalPages;

export default listSlice.reducer;
