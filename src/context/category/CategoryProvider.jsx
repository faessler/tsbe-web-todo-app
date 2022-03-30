import React, { useState, useEffect } from 'react';
import { STATUS } from '../../constants/api';
import { getCategoriesAPI, addCategoryAPI, removeCategoryAPI } from '../../api/categoryAPI';
import ContentContext from './CategoryContext';

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const [addStatus, setAddStatus] = useState(STATUS.INITIAL);
  const [addError, setAddError] = useState('');

  const [removeStatus, setRemoveStatus] = useState(STATUS.INITIAL);
  const [removeError, setRemoveError] = useState('');

  const [status, setStatus] = useState(STATUS.INITIAL);

  useEffect(() => {
    setStatus(STATUS.LOADING);
    getCategoriesAPI().then((response) => {
      if (response.status === 200) {
        setCategories(response.data);
        setStatus(STATUS.SUCCESS);
      } else {
        setStatus(STATUS.FAILURE);
      }
    });
  }, []);

  const add = {
    action: async (title, description) => {
      setAddError('');
      setAddStatus(STATUS.LOADING);
      const { status, data } = await addCategoryAPI(title, description);
      if (status === 200) {
        setCategories((categories) => [...categories, data]);
        setAddStatus(STATUS.SUCCESS);
      } else {
        setAddError(data.detail);
        setAddStatus(STATUS.FAILURE);
      }
      return { status, data };
    },
    status: addStatus,
    error: addError,
  };

  const remove = {
    action: async (id) => {
      setRemoveError('');
      setRemoveStatus(STATUS.LOADING);
      const { status, data } = await removeCategoryAPI(id);
      if (status === 200) {
        setCategories((categories) => categories.filter((category) => category.id !== id));
        setRemoveStatus(STATUS.SUCCESS);
      } else {
        setRemoveError(data.detail);
        setRemoveStatus(STATUS.FAILURE);
      }
      return { status, data };
    },
    status: removeStatus,
    error: removeError,
  };

  const value = { status, categories, add, remove };
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export default CategoryProvider;
