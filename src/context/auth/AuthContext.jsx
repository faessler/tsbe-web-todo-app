import { createContext } from 'react';

const AuthContext = createContext({
  token: null,
  signIn: () => {},
  signOut: () => {},
});

export default AuthContext;
