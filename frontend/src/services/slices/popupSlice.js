import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCalendarPopupOpen: false,
};
const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setIsCalendarPopupOpen(state, action) {
      state.isCalendarPopupOpen = action.payload;
    },
  },
});

export const popupSliceReducer = popupSlice.reducer;
export const { setIsCalendarPopupOpen } = popupSlice.actions;
