import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { STATUS } from '../../constants/api';
import { useAuthContext } from '../../context/auth';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Login.module.scss';

const Login = () => {
  const [status, setStatus] = useState('');
  const [response, setResponse] = useState({});
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthContext();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(STATUS.LOADING);
    const signInResponse = await auth.signIn(emailInput, passwordInput);
    setResponse(signInResponse);
    if (signInResponse.status === 200) {
      setStatus(STATUS.SUCCESS);
      navigate(from, { replace: true });
    } else {
      setStatus(STATUS.FAILURE);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      {status === STATUS.LOADING && <p>Loading...</p>}
      {status === STATUS.FAILURE && (
        <p className={styles.error}>
          <b>Error:</b> {response.data?.detail}
        </p>
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
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
      <p className={styles.register}>
        <i>
          Don't have an account? <Link to="/register">Register now!</Link>
        </i>
      </p>
    </div>
  );
};

export default Login;
