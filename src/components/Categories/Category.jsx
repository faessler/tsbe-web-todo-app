import React from 'react';
import PropTypes from 'prop-types';
import useCategoryContext from '../../context/category/useCategoryContext';
import { STATUS } from '../../constants/api';
import Button from '../Button/Button';
import Error from '../Error/Error';
import Todos from '../Todos/Todos';
import styles from './Category.module.scss';

const Category = ({ id, title, description }) => {
  const { remove } = useCategoryContext();

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <div>
          <h2 className={styles.heading}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        {remove.status === STATUS.FAILURE && <Error>{remove.error}</Error>}
        {remove.status === STATUS.LOADING && <div>Loading...</div>}
        <Button
          skin={Button.SKINS.SECONDARY}
          onClick={() => remove.action(id)}
          disabled={remove.status === STATUS.LOADING}
        >
          Remove Category
        </Button>
      </div>
      <hr className={styles.ruler} />
      <Todos id={id} />
    </div>
  );
};

Category.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Category;
