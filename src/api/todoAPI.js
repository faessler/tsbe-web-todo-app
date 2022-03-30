import fetchy from './fetchy';

export const getTodosOfCategoryAPI = (categoryId) => fetchy(`/users/me/category/${categoryId}`, 'GET');

export const addTodoAPI = (categoryId, title, description) =>
  fetchy(`/users/me/todos/`, 'POST', {
    category_id: categoryId,
    title,
    description,
  });

export const updateTodoAPI = (todoId, { title, description, done, dueDate, categoryId }) =>
  fetchy(`/users/me/todo/${todoId}`, 'PATCH', {
    title,
    description,
    done,
    due_date: dueDate,
    category_id: categoryId,
  });

export const removeTodoAPI = (todoId) => fetchy(`/users/me/todo/${todoId}`, 'DELETE');
