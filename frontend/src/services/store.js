import { configureStore } from '@reduxjs/toolkit';
import { postSliceReducer } from './slices/postsSlice';
import { courseSliceReducer } from './slices/coursesSlice';
import { reviewsSliceReducer } from './slices/reviewsSlice';
import { authSliceReducer } from './slices/authSlice';
import { coursesFiltersSliceReducer } from './slices/coursesFiltersSlice';

export const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    courses: courseSliceReducer,
    reviews: reviewsSliceReducer,
    auth: authSliceReducer,
    coursesFilters: coursesFiltersSliceReducer,
  },
});
