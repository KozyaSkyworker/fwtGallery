import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  paintingsPerPage: 12,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setPaintingPerPage(state, action) {
      state.paintingsPerPage = action.payload;
    },
  },
});

export const { setCurrentPage, setPaintingPerPage } = paginationSlice.actions;

export default paginationSlice.reducer;
