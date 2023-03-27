import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
});

export const { increment } = postsSlice.actions;

export default postsSlice.reducer;
