import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { STATUS } from '../../constants/api';
import { useAuthContext } from '../../context/auth';

const Login = () => {
  const [status, setStatus] = useState('');
  const [response, setResponse] = useState({});
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthContext();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(STATUS.LOADING);
    const signInResponse = await auth.signIn(emailInput, passwordInput);;
    setResponse(signInResponse);
    if (signInResponse.status === 200) {
      setStatus(STATUS.SUCCESS);
      navigate(from, { replace: true });
    } else {
      setStatus(STATUS.FAILURE);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {status === STATUS.LOADING && "LOADING..."}
      {status === STATUS.FAILURE && "FAILURE!"}
      {status === STATUS.FAILURE && response.data?.detail}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input
            id="email"
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
            disabled={status === STATUS.LOADING}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required
            disabled={status === STATUS.LOADING}
          />
        </div>
        <button type="submit" disabled={status === STATUS.LOADING}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
