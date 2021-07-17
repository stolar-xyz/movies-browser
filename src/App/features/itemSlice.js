import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    result: [],
    status: 'initial',
  },
  reducers: {
    fetchItem: state => {
      state.status = 'loading';
    },
    fetchItemSuccess: (state, { payload }) => {
      state.result = payload;
      state.status = 'success';
    },
    fetchItemError: state => {
      state.status = 'error';
    },
  },
});

export const { fetchItem, fetchItemSuccess, fetchItemError } = itemSlice.actions;

export const selectResult = state => state.item.result;
export const selectStatus = state => state.item.status;

export default itemSlice.reducer;
