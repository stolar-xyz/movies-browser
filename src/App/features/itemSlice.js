import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    result: [],
    resultDetails: [],
    displayedCast: null,
    displayedCrew: null,
    status: 'initial',
  },
  reducers: {
    fetchItem: state => {
      state.status = 'loading';
    },
    fetchItemSuccess: (
      state,
      {
        payload: {
          responseData,
          responseDetailsData,
          castItemsLength,
          crewItemsLength,
        },
      }
    ) => {
      state.result = responseData;
      state.resultDetails = responseDetailsData;
      state.displayedCast = castItemsLength;
      state.displayedCrew = crewItemsLength;
      state.status = 'success';
    },
    fetchItemError: state => {
      state.status = 'error';
    },
    setCastLength: (state, { payload }) => {
      state.displayedCast = payload;
    },
    setCrewLength: (state, { payload }) => {
      state.displayedCrew = payload;
    },
  },
});

export const {
  fetchItem,
  fetchItemSuccess,
  fetchItemError,
  setCastLength,
  setCrewLength,
} = itemSlice.actions;

export const selectResult = state => state.item.result;
export const selectResultDetails = state => state.item.resultDetails;
export const selectDisplayedCast = state => state.item.displayedCast;
export const selectDisplayedCrew = state => state.item.displayedCrew;
export const selectStatus = state => state.item.status;

export default itemSlice.reducer;
