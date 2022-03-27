import fetchy from './fetchy';

const signUpAPI = async (email, name, password) =>
  fetchy('/users/', 'POST', {
    email,
    name,
    password,
  });

export default signUpAPI;
