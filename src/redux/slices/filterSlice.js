import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'todo-filters',
  initialState: 'All',
  reducers: {
    setSelectedFilter: (_, action) => action.payload,
  },
});

export const { setSelectedFilter } = filterSlice.actions;

export default filterSlice.reducer;
