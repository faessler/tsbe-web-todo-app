import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const SKINS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const Button = ({ children, skin = SKINS.PRIMARY, ...props }) => (
  <button className={`${styles.button} ${styles[skin]}`} {...props}>
    {children}
  </button>
);

Button.SKINS = SKINS;

Button.propTypes = {
  children: PropTypes.node,
  skin: PropTypes.oneOf(Object.values(SKINS)),
};

export default Button;
