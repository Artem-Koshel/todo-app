import React, { useCallback } from 'react';
import { PropTypes } from 'prop-types';
import styles from './TextRadioButtons.module.scss';

export default function TextRadioButtons({ name, selectedValue, values, onChange }) {
  const handleValueChange = useCallback((event) => {
    onChange(event.target.value);
  });

  const textButtons = values.map((value) => {
    const selected = value === selectedValue;
    return (
      <label key={value} htmlFor={value}>
        <input
          type="radio"
          id={value}
          name={name}
          value={value}
          onChange={handleValueChange}
          checked={selected}
        />
        <span className={selected ? styles.checked : undefined}>{value}</span>
      </label>
    );
  });

  return <div className={styles.textRadioButtons}>{textButtons}</div>;
}

TextRadioButtons.propTypes = {
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
