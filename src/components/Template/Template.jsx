import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import styles from './Template.module.scss';

const Template = ({ children }) => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
  </>
);

Template.propTypes = {
  children: PropTypes.element,
};

export default Template;
