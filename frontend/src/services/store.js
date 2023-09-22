import { configureStore } from '@reduxjs/toolkit';
import { postSliceReducer } from './slices/postsSlice';
import { courseSliceReducer } from './slices/coursesSlide';
import { reviewsSliceReducer } from './slices/reviewsSlide';

export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    courses: courseSliceReducer,
    reviews: reviewsSliceReducer,
  },
});
