import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';
import filterReducer from './slices/filterSlice';

export default configureStore({
  reducer: {
    todoList: todoListReducer,
    selectedFilter: filterReducer,
  },
});
