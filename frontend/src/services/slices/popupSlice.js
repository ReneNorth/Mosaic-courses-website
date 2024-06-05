import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCalendarPopupOpen: false,
  isRegistrationLessonPopupOpen: false,
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
  },
});

export const popupSliceReducer = popupSlice.reducer;
export const { setIsCalendarPopupOpen, setIsRegistrationLessonPopupOpen } = popupSlice.actions;
