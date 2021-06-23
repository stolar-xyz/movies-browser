import { createSlice } from '@reduxjs/toolkit';

const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    result: [],
    status: 'initial',
  },
  reducers: {
    fetchGenres: state => {
      state.status = 'loading';
    },
    fetchGenresSuccess: (state, { payload }) => {
      state.status = 'success';
      state.result = payload.genres;
    },
    fetchGenresError: state => {
      state.status = 'error';
    },
  },
});

export const { fetchGenres, fetchGenresSuccess, fetchGenresError } =
  genresSlice.actions;

export const selectResult = state => state.genres.result;
export const selectStatus = state => state.genres.status;

export default genresSlice.reducer;
