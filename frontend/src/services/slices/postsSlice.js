import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  allPosts: [],
  currentPost: {},
};

const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {
  try {
    return api.getPosts();
  } catch (err) {
    return err;
  }
});

const getPostById = createAsyncThunk('posts/getPostById', async (id) => {
  try {
    return api.getPostWithSlug(id);
  } catch (err) {
    return err;
  }
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setCurrentPost(state, action) {
      state.currentPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload;
    });

    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.currentPost = action.payload;
    });
  },
});

const { setCurrentPost } = postsSlice.actions;
const postSliceReducer = postsSlice.reducer;

export {
  setCurrentPost, postSliceReducer, getAllPosts, getPostById,
};
