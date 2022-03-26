import React from 'react';
import { STORAGE_KEYS } from '../../constants/storage'
import useLocalStorage from '../../hooks/useLocalStorage';
import AuthContext from './AuthContext';
import signInAPI from '../../api/signInAPI';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage(STORAGE_KEYS.TOKEN, null);

  const signIn = async (email, password) => {
    const response = await signInAPI(email, password);
    if (response.status === 200) {
      setToken(response.data);
    }
    return response;
  };

  const signOut = () => {
    setToken(null);
  };

  const value = { token, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
