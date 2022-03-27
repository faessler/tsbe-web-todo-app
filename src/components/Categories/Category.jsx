import React from 'react';
import styles from './Category.module.scss';

const Category = ({ id, title, description, removeCategory }) => (
  <div className={styles.container}>
    <h2>{title}</h2>
    <p>{description}</p>
    <button className={styles.button} onClick={() => removeCategory(id)}>
      Remove Category
    </button>
  </div>
);

export default Category;
