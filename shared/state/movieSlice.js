import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { apiSearch } from '../api';

export const nextPage = createAsyncThunk(
  'movie/nextPageStatus',
  async (_, { getState }) => {
    const { search, page } = getState().movie;
    const { data } = await apiSearch('/', {
      s: search,
      page,
    });

    return data.Search;
  },
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    page: 1,
    search: 'marvel',
    list: [],
  },
  reducers: {
    initList: (state, action) => {
      state.list = action.payload;
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(nextPage.fulfilled, (state, action) => {
      state.page += 1;
      state.list = [...state.list, ...action.payload];
    });
  },
});

export const { initList } = movieSlice.actions;

export default movieSlice.reducer;
