import React from 'react';
import { useCategories } from '../../hooks/useCategories';
import { STATUS } from '../../constants/api';
import Category from './Category';
import AddCategory from './AddCategory';
import styles from './Categories.module.scss';

const Categories = () => {
  const { status, categories, addCategory, removeCategory } = useCategories();
  
  if (status === STATUS.LOADING) {
    return <div>LOADING...</div>;
  }
  return (
    <>
      <ul className={styles.list}>
        {categories.map(({ id, title, description }) => (
          <li key={id}>
            <Category id={id} title={title} description={description} removeCategory={removeCategory} />
          </li>
        ))}
      </ul>
      <AddCategory addCategory={addCategory} />
    </>
  );
};

export default Categories;
