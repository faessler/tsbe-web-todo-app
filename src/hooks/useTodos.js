import { useState, useEffect } from 'react';
import { STATUS } from '../constants/api';
import { getTodosOfCategoryAPI, addTodoAPI, removeTodoAPI } from '../api/todoAPI';

export const useTodos= (id) => {
  const [status, setStatus] = useState(STATUS.LOADING);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodosOfCategoryAPI(id).then((response) => {
      if (response.status === 200) {
        setTodos(response.data);
        setStatus(STATUS.SUCCESS);
      } else {
        setStatus(STATUS.FAILURE);
      }
    });
  }, []);

  const addTodo = async (title, description) => {
    const { status, data } = await addTodoAPI(id, title, description);
    if (status === 200) {
      setTodos((todos) => [...todos, data]);
    }
  }

  const removeTodo = async (id) => {
    const response = await removeTodoAPI(id);
    console.log('response', response);
    
    setTodos((todos) => todos.filter((todo => todo.id !== id)));
  }

  return {status, todos, addTodo, removeTodo};
}
