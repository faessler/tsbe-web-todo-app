import fetchy from './fetchy';

export const getTodosOfCategoryAPI = (categoryId) => fetchy(`/users/me/category/${categoryId}`, 'GET');

export const addTodoAPI = (categoryId, title, description) =>
  fetchy(`/users/me/todos/`, 'POST', {
    category_id: categoryId,
    title,
    description,
  });

export const removeTodoAPI = (todoId) => fetchy(`/users/me/todo/${todoId}`, 'DELETE');
