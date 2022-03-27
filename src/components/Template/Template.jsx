import React from 'react';
import Header from '../Header/Header';
import styles from './Template.module.scss';

const Template = ({ children }) => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
  </>
);

export default Template;
