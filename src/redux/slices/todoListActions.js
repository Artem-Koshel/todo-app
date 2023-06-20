import { createAction } from '@reduxjs/toolkit';
import {
  addItem as repositoryAddItem,
  removeItem as repositoryRemoveItem,
  toggleStatus as repositoryToggleStatus,
  removeItems as repositoryRemoveItems,
  getList,
} from '../../services/repository';

export const addItem = createAction('todo/add', (item) => ({
  payload: {
    ...item,
    id: repositoryAddItem(item),
  },
}));

export const removeItem = createAction('todo/remove', (id) => {
  repositoryRemoveItem(id);
  return {
    payload: {
      id,
    },
  };
});

export const removeItems = createAction('todo/remove-bulk', (ids) => {
  repositoryRemoveItems(ids);
  const items = getList();
  return {
    payload: {
      items,
    },
  };
});

export const toggleStatus = createAction('todo/done', (id) => {
  repositoryToggleStatus(id);
  return {
    payload: {
      id,
    },
  };
});
