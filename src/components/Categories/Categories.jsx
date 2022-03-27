import React, { useState, useEffect } from 'react';
import { getCategoriesAPI, removeCategoryAPI } from '../../api/categoryAPI';
import { STATUS } from '../../constants/api';
import Category from './Category';
import AddCategory from './AddCategory';
import styles from './Categories.module.scss';

const Categories = () => {
  const [status, setStatus] = useState(STATUS.LOADING);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesAPI().then((response) => {
      if (response.status === 200) {
        setCategories(response.data);
        setStatus(STATUS.SUCCESS);
      } else {
        setStatus(STATUS.FAILURE);
      }
    });
  }, []);

  const removeCategory = (id) => {
    setCategories((categories) => categories.filter((category) => category.id !== id));
    removeCategoryAPI(id);
  };

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
      <AddCategory setCategories={setCategories} />
    </>
  );
};

export default Categories;
