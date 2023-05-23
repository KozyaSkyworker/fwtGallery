import { configureStore } from '@reduxjs/toolkit';
import filter from './filtersSlice';
import theme from './themeSlice';
import pagination from './paginationSlice';

export const store = configureStore({
  reducer: {
    filter,
    theme,
    pagination,
  },
});
