import { configureStore } from '@reduxjs/toolkit';
import { postSliceReducer } from './slices/postsSlice';
import { courseSliceReducer } from './slices/coursesSlice';
import { reviewsSliceReducer } from './slices/reviewsSlice';
import { authSliceReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    courses: courseSliceReducer,
    reviews: reviewsSliceReducer,
    auth: authSliceReducer,
  },
});
