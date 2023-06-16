import React, { useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem, toggleStatus } from '../../redux/slices/todoListActions';
import Checkbox from '../../components/Checkbox/Checkbox';
import styles from './ToDoItem.module.scss';

export default function ToDoItem({ item }) {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(toggleStatus(item.id));
  };

  const handleMouseEnter = useCallback(() => {
    setHover(true);
  });

  const handleCrossClick = useCallback(() => {
    dispatch(removeItem(item.id));
  });

  const handleMouseLeave = useCallback(() => {
    setHover(false);
  });

  return (
    <div
      className={styles.todoItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Checkbox id={item.id} text={item.text} checked={item.done} onChange={handleChange} />
      {hover && <input type="button" className={styles.cross} onClick={handleCrossClick} />}
    </div>
  );
}

ToDoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};
