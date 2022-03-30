import React from 'react';
import useContentContext from '../../context/category/useCategoryContext';
import { STATUS } from '../../constants/api';
import Category from './Category';
import AddCategory from './AddCategory';
import Error from '../Error/Error';
import styles from './Categories.module.scss';

const Categories = () => {
  const { status, categories } = useContentContext();

  return (
    <>
      {status === STATUS.LOADING && <i>LOADING...</i>}
      {status === STATUS.FAILURE && <Error>Error: Couldn't load the categories.</Error>}
      {status === STATUS.SUCCESS && (
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
      )}
    </>
  );
};

export default Categories;
