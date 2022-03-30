import React, { useState, useEffect } from 'react';
import { STATUS } from '../../constants/api';
import { getTodosOfCategoryAPI, addTodoAPI, updateTodoAPI, removeTodoAPI } from '../../api/todoAPI';
import ContentContext from './TodoContext';

const TodoProvider = ({ children, categoryId }) => {
  const [status, setStatus] = useState(STATUS.INITIAL);
  const [todos, setTodos] = useState([]);

  const [addStatus, setAddStatus] = useState(STATUS.INITIAL);
  const [addError, setAddError] = useState('');

  const [updateStatus, setUpdateStatus] = useState(STATUS.INITIAL);
  const [updateError, setUpdateError] = useState('');

  const [removeStatus, setRemoveStatus] = useState(STATUS.INITIAL);
  const [removeError, setRemoveError] = useState('');

  useEffect(() => {
    setStatus(STATUS.LOADING);
    getTodosOfCategoryAPI(categoryId).then((response) => {
      if (response.status === 200) {
        setTodos(response.data);
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
      const { status, data } = await addTodoAPI(categoryId, title, description);
      if (status === 200) {
        setTodos((todos) => [...todos, data]);
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

  const update = {
    action: async (id, { title, description, done, dueDate, categoryId }) => {
      setUpdateError('');
      setUpdateStatus(STATUS.LOADING);
      const { status, data } = await updateTodoAPI(id, { title, description, done, dueDate, categoryId });
      if (status === 200) {
        setTodos((todos) => todos.map(todo => todo.id === id ? data : todo));
        setUpdateStatus(STATUS.SUCCESS);
      } else {
        setUpdateError(data.detail);
        setUpdateStatus(STATUS.FAILURE);
      }
      return { status, data };
    },
    status: updateStatus,
    error: updateError,
  };

  const remove = {
    action: async (id) => {
      setRemoveError('');
      setRemoveStatus(STATUS.LOADING);
      const { status, data } = await removeTodoAPI(id);
      if (status === 200) {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
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

  const value = { status, todos, add, update, remove };
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export default TodoProvider;
