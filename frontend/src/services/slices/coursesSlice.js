import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  allCourses: [],
  totalCount: 0,
  next: null,
  previous: null,
  currentCourse: {},
  sending: false,
  selectedLesson: {},
};

const getCourses = createAsyncThunk('courses/getCourses', async (data) => {
  try {
    return api.getCourses(data);
  } catch (err) {
    return err;
  }
});

const getCourseById = createAsyncThunk('courses/getCourseById', async (id) => {
  try {
    return api.getCourseWithId(id);
  } catch (err) {
    return err;
  }
});

const getAllCourses = createAsyncThunk('courses/getAllCourses', async () => {
  try {
    return api.getAllcourses();
  } catch (err) {
    return err;
  }
});

const bookMasterclass = createAsyncThunk('courses/bookMasterclass', async (masterclassId) => {
  try {
    return api.bookMasterclass(masterclassId);
  } catch (err) {
    return err;
  }
});

const bookMasterclassForUnauthorizedUser = createAsyncThunk(
  'courses/bookMasterclassForUnauthorizedUser',
  async (data) => {
    try {
      return api.bookMasterclassForUnauthorizedUser(data);
    } catch (err) {
      return err;
    }
  },
);

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCurrentCourse(state, action) {
      state.currentCourse = action.payload;
    },
    setSelectedLesson(state, action) {
      state.selectedLesson = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCourses.pending, (state, action) => {
      state.sending = true;
    });
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.allCourses = action.payload.results;
      state.totalCount = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.sending = false;
    });

    builder.addCase(getCourseById.fulfilled, (state, action) => {
      state.currentCourse = action.payload;
    });
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.allCourses = action.payload.results;
    });
  },
});

const { setCurrentCourse, setSelectedLesson } = coursesSlice.actions;
const courseSliceReducer = coursesSlice.reducer;

export {
  setCurrentCourse,
  setSelectedLesson,
  courseSliceReducer,
  getCourses,
  getAllCourses,
  getCourseById,
  bookMasterclass,
  bookMasterclassForUnauthorizedUser,
};
