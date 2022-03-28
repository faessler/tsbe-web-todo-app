import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './AddCategory.module.scss';

const AddCategory = ({ addCategory }) => {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(titleInput, descriptionInput, (errorMessage) => {
      if (errorMessage) {
        setError(errorMessage);
      } else {
        setError(null);
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
      {!!error && <div className={styles.error}>{error}</div>}
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
  addCategory: PropTypes.func,
};

export default AddCategory;
