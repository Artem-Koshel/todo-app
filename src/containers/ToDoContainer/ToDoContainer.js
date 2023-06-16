import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/Input/Input';
import List from '../../components/List/List';
import styles from './ToDoContainer.module.scss';
import { addItem } from '../../redux/slices/todoListActions';
import ToDoItem from '../ToDoItem/ToDoItem';
import ControlBar from '../ControlBar/ControlBar';

export default function ToDoContainer() {
  const items = useSelector((state) => state.todoList);
  const selectedFilter = useSelector((state) => state.selectedFilter);

  const filteredItems =
    selectedFilter === 'All'
      ? items
      : items.filter((item) => item.done === (selectedFilter === 'Completed'));

  const dispatch = useDispatch();

  const addTodoListItem = (text) => {
    dispatch(
      addItem({
        done: false,
        text,
      })
    );
  };

  return (
    <div className={styles.todoContainer}>
      <h1>TODO</h1>
      <Input onEnterPress={addTodoListItem} />
      <List items={filteredItems} Item={ToDoItem} ControlBar={ControlBar} />
    </div>
  );
}
