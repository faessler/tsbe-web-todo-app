import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './Input.module.scss';

const Input = ({ label, ...props }) => {
  const id = nanoid();
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input id={id} className={styles.input} {...props} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
