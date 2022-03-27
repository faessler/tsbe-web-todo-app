import fetchy from './fetchy';

export const getTodosOfCategoryAPI = (categoryId) => fetchy(`/category/${categoryId}`, 'GET')
