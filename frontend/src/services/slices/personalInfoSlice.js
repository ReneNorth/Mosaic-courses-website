import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  personalInfo: {},
};

export const fetchPersonalInfo = createAsyncThunk(
  'userInfo/fetchPersonalInfo',
  async () => {
    const response = await api.getMyPersonalInfo();
    return response;
  },
);

const personalInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPersonalInfo.fulfilled, (state, action) => {
      state.personalInfo = action.payload;
    });
  },
});

export const selectPersonalInfo = (state) => state.user.personalInfo;

export const personalInfoSliceReducer = personalInfoSlice.reducer;
