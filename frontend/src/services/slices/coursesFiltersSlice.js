/* eslint-disable no-restricted-syntax */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  sorting: [{ name: 'По умолчанию', slug: '' }],
  activeSortingStatus: '',
  filters: {
    EXP: [
      { name: 'По умолчанию', slug: '' },
    ],
    DURATION: [
      { name: 'По умолчанию', slug: '' },
    ],
    STYLE: [
      { name: 'По умолчанию', slug: '' },
    ],
    TARGET_AUDIENCE: [
      { name: 'По умолчанию', slug: '' },
    ],
  },
};

const getFilters = createAsyncThunk('coursesFilters/getFilters', async () => {
  try {
    return api.getAllFilters();
  } catch (err) {
    return err;
  }
});

export const coursesFiltersSlice = createSlice({
  name: 'coursesFilters',
  initialState,
  reducers: {
    setCurrentSortingStatus(state, action) {
      state.activeSortingStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getAllCourses.pending, (state, action) => {
    //   state.sending = true;
    // });
    // builder.addCase(getAllCourses.fulfilled, (state, action) => {
    //   state.allCourses = action.payload.results;
    //   state.totalCount = action.payload.count;
    //   state.next = action.payload.next;
    //   state.previous = action.payload.previous;
    //   state.sending = false;
    // });

    builder.addCase(getFilters.fulfilled, (state, action) => {
      for (const filter in action.payload) {
        if (filter !== 'ORDER') {
          state.filters[filter] = action.payload[filter];
        }
      }

      state.sorting = action.payload.ORDER;
    });
  },
});

const { setCurrentSortingStatus } = coursesFiltersSlice.actions;
const coursesFiltersSliceReducer = coursesFiltersSlice.reducer;

export {
  setCurrentSortingStatus,
  getFilters,
  coursesFiltersSliceReducer,
};
