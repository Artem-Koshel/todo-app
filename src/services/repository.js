import { nanoid } from 'nanoid';

const key = 'todo-list';

function setList(todoList) {
  localStorage.setItem(key, JSON.stringify(todoList));
}

export function getList() {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function addItem(todoItem) {
  const id = nanoid();
  const todoList = getList();
  todoList.push({ id, ...todoItem });
  setList(todoList);

  return id;
}

export function removeItem(id) {
  const todoList = getList();
  setList(todoList.filter((item) => item.id !== id));
}

export function removeItems(ids) {
  const todoList = getList();
  setList(todoList.filter((item) => ids.every((id) => id !== item.id)));
}

export function toggleStatus(id) {
  const todoList = getList();
  const index = todoList.findIndex((item) => item.id === id);
  if (index === -1) {
    return;
  }
  todoList[index].done = !todoList[index].done;
  setList(todoList);
}
