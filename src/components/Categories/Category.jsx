import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Todos from '../Todos/Todos';
import styles from './Category.module.scss';

const Category = ({ id, title, description, removeCategory }) => {  
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button skin={Button.SKINS.SECONDARY} onClick={() => removeCategory(id)}>
        Remove Category
      </Button>
      <hr className={styles.ruler} />
      <Todos id={id} />
    </div>
  );
};

Category.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  removeCategory: PropTypes.func,
};

export default Category;
