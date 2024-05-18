import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  filters: [],
  sorting: [],
  activeSortingStatus: '',
};

// const getAllCourses = createAsyncThunk('courses/getAllCourses', async (data) => {
//   try {
//     return api.getCourses(data);
//   } catch (err) {
//     return err;
//   }
// });

// const getCourseById = createAsyncThunk('courses/getCourseById', async (id) => {
//   try {
//     return api.getCourseWithSlug(id);
//   } catch (err) {
//     return err;
//   }
// });

export const coursesFiltersSlice = createSlice({
  name: 'coursesFilters',
  initialState,
  reducers: {
    getCurrentSorting(state, action) {
      state.sorting = [
        { name: 'Рекомендуемые', value: 'recommended' },
        { name: 'Ближайшие', value: 'date' },
        { name: 'По цене', value: 'price' },
        { name: 'По умолчанию', value: '' },
      ];
    },
    setCurrentSortingStatus(state, action) {
      state.activeSortingStatus = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getAllCourses.pending, (state, action) => {
  //     state.sending = true;
  //   });
  //   builder.addCase(getAllCourses.fulfilled, (state, action) => {
  //     state.allCourses = action.payload.results;
  //     state.totalCount = action.payload.count;
  //     state.next = action.payload.next;
  //     state.previous = action.payload.previous;
  //     state.sending = false;
  //   });

  //   builder.addCase(getCourseById.fulfilled, (state, action) => {
  //     state.currentCourse = action.payload;
  //   });
  // },
});

const { getCurrentSorting, setCurrentSortingStatus } = coursesFiltersSlice.actions;
const coursesFiltersSliceReducer = coursesFiltersSlice.reducer;

export {
  getCurrentSorting,
  setCurrentSortingStatus,
  coursesFiltersSliceReducer,
};
