import { createSlice } from '@reduxjs/toolkit';
import { getDataFromLocalStorage } from '../saveDataInLocalStorage';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isTheme: getDataFromLocalStorage('theme') || false,
  },
  reducers: {
    toggleTheme: state => {
      state.isTheme = !state.isTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = state => state.theme.isTheme;

export default themeSlice.reducer;
