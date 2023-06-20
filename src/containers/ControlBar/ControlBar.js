import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilter } from '../../redux/slices/filterSlice';
import TextRadioButtons from '../../components/TextRadioButtons/TextRadioButtons';
import styles from './ControlBar.module.scss';
import { removeItems } from '../../redux/slices/todoListActions';

export default function ControlBar() {
  const selectedFilter = useSelector((state) => state.selectedFilter);
  const items = useSelector((state) => state.todoList);
  const itemsLeft = items.filter((item) => !item.done).length;
  const dispatch = useDispatch();

  const handleClearCompleted = useCallback(() => {
    const idsToRemove = items.filter((item) => item.done).map((item) => item.id);
    dispatch(removeItems(idsToRemove));
  });

  return (
    <div className={styles.controlBar}>
      <span className={styles.filters}>{`${itemsLeft} items left`}</span>
      <TextRadioButtons
        name="filters"
        selectedValue={selectedFilter}
        values={['All', 'Active', 'Completed']}
        onChange={(value) => dispatch(setSelectedFilter(value))}
      />
      <button className={styles.clearCompleted} type="button" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </div>
  );
}
