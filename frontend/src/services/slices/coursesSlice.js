import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  allCourses: [],
  totalCount: 0,
  next: null,
  previous: null,
  currentCourse: {},
};

const getAllCourses = createAsyncThunk('courses/getAllCourses', async (data) => {
  try {
    return api.getCourses(data);
  } catch (err) {
    return err;
  }
});

const getCourseById = createAsyncThunk('courses/getCourseById', async (id) => {
  try {
    return api.getCourseWithSlug(id);
  } catch (err) {
    return err;
  }
});

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCurrentCourse(state, action) {
      state.currentCourse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.allCourses = action.payload.results;
      state.totalCount = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    });

    builder.addCase(getCourseById.fulfilled, (state, action) => {
      state.currentCourse = action.payload;
    });
  },
});

const { setCurrentCourse } = coursesSlice.actions;
const courseSliceReducer = coursesSlice.reducer;

export {
  setCurrentCourse, courseSliceReducer, getAllCourses, getCourseById,
};
