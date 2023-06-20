import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';
import filterReducer from './slices/filterSlice';

export default function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      todoList: todoListReducer,
      selectedFilter: filterReducer,
    },
    preloadedState,
  });
}
