const signUpAPI = async (email, name, password) => {
  const response = await fetch('http://localhost:8000/users/', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      name,
      password,
    }),
  });

  const status = response.status;
  const data = await response.json();

  return {
    status,
    data,
  };
};

export default signUpAPI;
