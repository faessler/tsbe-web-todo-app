import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addCategoryAPI } from '../../api/categoryAPI';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './AddCategory.module.scss';

const AddCategory = ({ setCategories }) => {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategoryAPI(titleInput, descriptionInput).then((response) => {
      if (response.status === 200) {
        setCategories((categories) => [...categories, response.data]);
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
      <div className={styles.input}>
        <Input label="Title" type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} required />
      </div>
      <div className={styles.input}>
        <Input
          label="Description"
          type="text"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
          required
        />
      </div>
      <div className={styles.controls}>
        <Button type="submit">Save</Button>
        <Button skin={Button.SKINS.SECONDARY} type="button" onClick={() => setShowForm(false)}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func,
};

export default AddCategory;
