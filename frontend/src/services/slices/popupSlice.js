import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCalendarPopupOpen: false,
  isRegistrationLessonPopupOpen: false,
  isApplicationAcceptedPopupOpen: false,
};
const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setIsCalendarPopupOpen(state, action) {
      state.isCalendarPopupOpen = action.payload;
    },
    setIsRegistrationLessonPopupOpen(state, action) {
      state.isRegistrationLessonPopupOpen = action.payload;
    },
    setIsApplicationAcceptedPopupOpen(state, action) {
      state.isApplicationAcceptedPopupOpen = action.payload;
    },
  },
});

export const popupSliceReducer = popupSlice.reducer;
export const {
  setIsCalendarPopupOpen,
  setIsRegistrationLessonPopupOpen,
  setIsApplicationAcceptedPopupOpen,
} = popupSlice.actions;
