import fetchy from './fetchy';

export const getCategoriesAPI = () => fetchy('/categories/', 'GET');

export const addCategoryAPI = (title, description) =>
  fetchy('/category/', 'POST', {
    title,
    description,
  });

export const removeCategoryAPI = (categoryId) => fetchy(`/categories/${categoryId}`, 'DELETE');
