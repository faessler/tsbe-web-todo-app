import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signUpAPI from '../../api/signUpAPI';
import { STATUS } from '../../constants/api';

const Register = () => {
  const [status, setStatus] = useState('');
  const [response, setResponse] = useState({});
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.LOADING);
    const signUpResponse = await signUpAPI(emailInput, nameInput, passwordInput);
    setStatus(signUpResponse.status === 200 ? STATUS.SUCCESS : STATUS.FAILURE);
    setResponse(signUpResponse);
  };

  if (status === STATUS.SUCCESS) {
    return <div>
      <h2>User was created successfully!</h2>
      go to <Link to="/login">login page</Link>.
    </div>;
  }

  return (
    <div>
      <h1>Register</h1>
      {status === STATUS.LOADING && "Loading..."}
      {status === STATUS.FAILURE && "FAILURE!"}
      {status === STATUS.FAILURE && response.data?.detail}
      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            required
            disabled={status === STATUS.LOADING}
          />
        </div>
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

export default Register;
