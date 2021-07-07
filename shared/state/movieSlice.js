import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { apiSearch } from '../api';

export const nextPage = createAsyncThunk(
  'movie/nextPageStatus',
  async (_, { getState }) => {
    const { search, page } = getState().movie;
    const { data } = await apiSearch('/', {
      s: search,
      page: page + 1,
    });

    return data.Search;
  },
);

export const searchMovie = createAsyncThunk(
  'movie/searchMovieStatus',
  async (search) => {
    const { data } = await apiSearch('/', {
      s: search,
    });

    return {
      search,
      list: data.Search,
    };
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(nextPage.fulfilled, (state, action) => {
      state.page += 1;
      state.list = [...state.list, ...action.payload];
    });

    builder.addCase(
      searchMovie.fulfilled,
      (state, { payload: { search, list } }) => {
        state.page = 1;
        state.search = search;
        state.list = list;
      },
    );
  },
});

export const { initList } = movieSlice.actions;

export default movieSlice.reducer;
