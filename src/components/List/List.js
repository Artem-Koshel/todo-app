import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './List.module.scss';

function List({ items, Item, ControlBar }) {
  const itemsContainers = items.map((item) => (
    <li key={item.id}>
      <Item item={item} />
    </li>
  ));

  return (
    <div className={styles.list}>
      <ul>{itemsContainers}</ul>
      {ControlBar && <ControlBar />}
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  Item: PropTypes.elementType.isRequired,
  ControlBar: PropTypes.elementType,
};

List.defaultProps = {
  items: [],
  ControlBar: undefined,
};

export default List;
