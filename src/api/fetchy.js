import { STORAGE_KEYS } from '../constants/storage';

const fetchy = async (endpoint, method, body) => {
  const authLocalStorage = window.localStorage.getItem(STORAGE_KEYS.TOKEN);
  const auth = authLocalStorage && JSON.parse(authLocalStorage);

  const response = await fetch(`http://localhost:8000${endpoint}`, {
    method: method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-Type': 'application/json',
      ...(auth ? { Authorization: `${auth.token_type} ${auth.access_token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const status = response.status;
  const data = await response.json();

  return {
    status,
    data,
  };
};

export default fetchy;
