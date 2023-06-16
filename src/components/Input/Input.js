import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './Input.module.scss';

export default function Input({ onEnterPress }) {
  const [value, setValue] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEnterPress(value);
      setValue('');
    }
  };
  return (
    <input
      className={styles.todoInput}
      onKeyUp={handleKeyPress}
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Input your text and press ENTER"
    />
  );
}

Input.propTypes = {
  onEnterPress: PropTypes.func.isRequired,
};
