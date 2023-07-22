import { configureStore } from '@reduxjs/toolkit';
import { postSliceReducer } from './slices/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
  },
});
