import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.scss';

const Error = ({ children }) => <p className={styles.error}>{children}</p>;

Error.propTypes = {
  children: PropTypes.node,
};

export default Error;
