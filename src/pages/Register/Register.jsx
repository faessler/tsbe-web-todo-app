import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signUpAPI from '../../api/signUpAPI';
import { STATUS } from '../../constants/api';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Register.module.scss';

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

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Register</h1>
      {status === STATUS.LOADING && <p>Loading...</p>}
      {status === STATUS.FAILURE && (
        <p className={styles.error}>
          <b>Error:</b> {response.data?.detail}
        </p>
      )}
      {status === STATUS.SUCCESS ? (
        <p>
          User was created successfully!
          <br /> Go to <Link to="/login">login page</Link> to login and start using the todo app.
        </p>
      ) : (
        <>
          <form onSubmit={onSubmit} className={styles.form}>
            <Input
              label="Name"
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required
              disabled={status === STATUS.LOADING}
            />
            <Input
              label="Email"
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
              disabled={status === STATUS.LOADING}
            />
            <Input
              label="Password"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
              disabled={status === STATUS.LOADING}
            />
            <Button type="submit" disabled={status === STATUS.LOADING}>
              Submit
            </Button>
          </form>
          <hr className={styles.ruler} />
          <p className={styles.login}>
            Already have an account? <Link to="/login">Login here!</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Register;
