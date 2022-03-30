import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { STATUS } from '../../constants/api';
import useCategoryContext from '../../context/category/useCategoryContext';
import Button from '../Button/Button';
import Error from '../Error/Error';
import Input from '../Input/Input';
import styles from './AddCategory.module.scss';

const AddCategory = () => {
  const { add } = useCategoryContext();
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    add.action(titleInput, descriptionInput).then((data) => {
      if (data.status === 200) {
        setTitleInput('');
        setDescriptionInput('');
        setShowForm(false);
      }
    });
  };

  return !showForm ? (
    <div className={styles.button}>
      <Button onClick={() => setShowForm(true)}>Add Category</Button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Title"
        type="text"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        disabled={add.status === STATUS.LOADING}
        required
      />
      <Input
        label="Description"
        type="text"
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
        disabled={add.status === STATUS.LOADING}
        required
      />
      {add.status === STATUS.LOADING && 'Loading...'}
      {add.status === STATUS.FAILURE && <Error>{add.error}</Error>}
      <div className={styles.controls}>
        <Button type="submit" disabled={add.status === STATUS.LOADING}>
          Save
        </Button>
        <Button
          skin={Button.SKINS.SECONDARY}
          type="button"
          onClick={() => setShowForm(false)}
          disabled={add.status === STATUS.LOADING}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func,
};

export default AddCategory;
