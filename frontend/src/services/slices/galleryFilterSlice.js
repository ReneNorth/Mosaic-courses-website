import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
  filters: {
    author: [{ name: 'По умолчанию', slug: '' }],
    availability: [{ name: 'По умолчанию', slug: '' }],
    typesMosaic: [{ name: 'По умолчанию', slug: '' }],
  },
  filtersSlugs: {},
  activeFilters: [],
};

const getFilters = createAsyncThunk('coursesFilters/getFilters', async () => {
  try {
    return api.getAllFilters();
  } catch (err) {
    return err;
  }
});
