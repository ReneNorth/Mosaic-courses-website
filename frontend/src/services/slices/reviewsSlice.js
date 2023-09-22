import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  allReviews: [],
  currentReview: {},
};

const getAllReviews = createAsyncThunk('reviews/getAllReviews', async () => {
  try {
    return api.getReviews();
  } catch (err) {
    return err;
  }
});

const getReviewById = createAsyncThunk('reviews/getReviewById', async (id) => {
  try {
    return api.getReviewWithSlug(id);
  } catch (err) {
    return err;
  }
});

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setCurrentReview(state, action) {
      state.currentReview = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.allReviews = action.payload;
    });

    builder.addCase(getReviewById.fulfilled, (state, action) => {
      state.currentReview = action.payload;
    });
  },
});

const { setCurrentReview } = reviewsSlice.actions;
const reviewsSliceReducer = reviewsSlice.reducer;

export {
  setCurrentReview, reviewsSliceReducer, getAllReviews, getReviewById,
};
