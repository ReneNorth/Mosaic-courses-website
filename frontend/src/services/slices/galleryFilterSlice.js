import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    author: [{ name: 'По умолчанию', slug: '' }],
    availability: [{ name: 'По умолчанию', slug: '' }],
    typesMosaic: [{ name: 'По умолчанию', slug: '' }],
  },
  filtersSlugs: {},
  activeFilters: [],
};

// прописать фильтрацию на фронте
const getFilters = createAsyncThunk('coursesFilters/getFilters', async () => {
  // try {
  //   return api.getAllFilters();
  // } catch (err) {
  //   return err;
  // }
});

const ORDER = 'ORDER';

export const galleryFiltersSlice = createSlice({
  name: 'galleryFilters',
  initialState,
  reducers: {
    setCurrentSortingStatus(state, action) {
      state.activeSortingStatus = action.payload;
    },
    setCurrentFilter(state, action) {
      state.activeFilters = action.payload;
    },
    setfiltersSlugs(state, action) {
      state.filtersSlugs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilters.fulfilled, (state, action) => {
      Object.keys(action.payload).forEach((filter) => {
        if (filter !== ORDER) {
          state.filters[filter] = action.payload[filter];
          action.payload[filter].forEach((el) => {
            state.filtersSlugs[`${el.slug}`] = false;
          });
        }
      });
      state.sorting = action.payload.ORDER;
    });
  },
});

const {
  setCurrentSortingStatus,
  setCurrentFilter, setfiltersSlugs,
} = galleryFiltersSlice.actions;
const coursesFiltersSliceReducer = galleryFiltersSlice.reducer;

export {
  setCurrentFilter,
  setfiltersSlugs,
  setCurrentSortingStatus,
  getFilters,
  coursesFiltersSliceReducer,
};
