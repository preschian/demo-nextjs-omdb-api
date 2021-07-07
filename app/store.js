import { configureStore } from '@reduxjs/toolkit';

import movieSlice from '../shared/state/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});
