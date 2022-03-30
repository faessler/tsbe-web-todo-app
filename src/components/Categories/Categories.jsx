import React from 'react';
import useContentContext from '../../context/category/useCategoryContext';
import { STATUS } from '../../constants/api';
import Category from './Category';
import AddCategory from './AddCategory';
import styles from './Categories.module.scss';

const Categories = () => {
  const { status, categories } = useContentContext();

  if (status === STATUS.LOADING) {
    return <div>LOADING...</div>;
  }
  return (
    <>
      <ul className={styles.list}>
        {categories.map(({ id, title, description }) => (
          <li key={id}>
            <Category id={id} title={title} description={description} />
          </li>
        ))}
      </ul>
      <AddCategory />
    </>
  );
};

export default Categories;
