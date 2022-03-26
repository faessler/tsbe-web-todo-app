import React from 'react';
import { useAuthContext } from '../../context/auth';

const App = () => {
  const auth = useAuthContext();
  return (
    <div>
      <h1>App</h1>
      <button onClick={auth.signOut}>Logout</button>
    </div>
  );
};

export default App;
