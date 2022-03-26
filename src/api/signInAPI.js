const signInAPI = async (username, password) => {
  const response = await fetch('http://localhost:8000/token', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=${username}&password=${password}`,
  });

  const status = response.status;
  const data = await response.json();

  return {
    status,
    data,
  };
};

export default signInAPI;
