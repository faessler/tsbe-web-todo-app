import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/auth';
import styles from './Header.module.scss';

const Header = () => {
  const auth = useAuthContext();
  let location = useLocation();

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        TODO
      </Link>
      {location.pathname.includes('/login') && (
        <Link to="/register" className={styles.link}>
          Register
        </Link>
      )}
      {location.pathname.includes('/register') && (
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      )}
      {auth.token && (
        <button onClick={auth.signOut} className={styles.button}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
