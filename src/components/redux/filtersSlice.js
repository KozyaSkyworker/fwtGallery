import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  author: { id: 0, name: 'Author' },
  location: { id: 0, location: 'Location' },
  timeFrom: 0,
  timeBefore: 2023,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setAuthor(state, action) {
      state.author = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setTimeFrom(state, action) {
      state.timeFrom = action.payload;
    },
    setTimeBefore(state, action) {
      state.timeBefore = action.payload;
    },
  },
});

export const { setSearch, setAuthor, setLocation, setTimeFrom, setTimeBefore } =
  filtersSlice.actions;

export default filtersSlice.reducer;
