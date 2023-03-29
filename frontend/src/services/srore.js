import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './Api/postsApi/postsApi';
import { postsSlice } from './slices/postsSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});
