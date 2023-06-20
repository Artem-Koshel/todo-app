import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Checkbox.module.scss';
import { ReactComponent as Checkmark } from './checkmark.svg';

export default function Checkbox({ id, text, checked, onChange }) {
  return (
    <label className={styles.checkbox} htmlFor={id}>
      <div className={`${styles.styledCheckbox} ${checked ? styles.checked : styles.unchecked}`}>
        {checked && <Checkmark width="15px" height="15px" className={styles.checkmark} />}
      </div>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <span className={`${styles.itemText} ${checked ? styles.crossed : undefined}`}>{text}</span>
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
