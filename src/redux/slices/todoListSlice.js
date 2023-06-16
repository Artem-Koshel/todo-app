import { createSlice } from '@reduxjs/toolkit';

import { addItem, removeItem, removeItems, toggleStatus } from './todoListActions';
import { getList } from '../../services/repository';

export const todoListSlice = createSlice({
  name: 'todo-list',
  initialState: getList(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItem, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeItem, (state, action) => state.filter((item) => item.id !== action.payload.id))
      .addCase(removeItems, (_, action) => action.payload.items)
      .addCase(toggleStatus, (state, action) => {
        const index = state.findIndex((item) => item.id === action.payload.id);
        state[index].done = !state[index].done;
      });
  },
});

export default todoListSlice.reducer;
