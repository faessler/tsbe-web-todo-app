import { useState, useEffect } from 'react';
import { STATUS } from '../constants/api';
import { getCategoriesAPI, addCategoryAPI, removeCategoryAPI } from '../api/categoryAPI';

export const useCategories = () => {
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

  const addCategory = async (title, description, callback) => {
    const { status: statuss, data } = await addCategoryAPI(title, description);
    if (statuss === 200) {
      setCategories((categories) => [...categories, data]);
      callback(null);
    } else {
      callback(data.detail)
    }
  };

  const removeCategory = (id) => {
    setCategories((categories) => categories.filter((category) => category.id !== id));
    removeCategoryAPI(id);
  };

  return { status, categories, addCategory, removeCategory };
};
