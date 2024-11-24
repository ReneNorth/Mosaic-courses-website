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

export const updatePersonalInfo = createAsyncThunk(
  'userInfo/patchPersonalInfo',
  async (changes) => {
    const response = await api.changeMyPersonalInfo(changes);
    return response;
  },
);

export const updateEmail = createAsyncThunk(
  'userInfo/patchEmail',
  async (newEmail) => {
    const response = await api.changeEmail(newEmail);
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
    builder.addCase(updatePersonalInfo.fulfilled, (state, action) => {
      state.personalInfo = action.payload;
    });
    builder.addCase(updateEmail.fulfilled, (state, action) => {
      state.personalInfo = action.payload;
    });
  },
});

export const selectPersonalInfo = (state) => state.user.personalInfo;

export const personalInfoSliceReducer = personalInfoSlice.reducer;
