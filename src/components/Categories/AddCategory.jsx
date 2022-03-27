import React, { useState } from 'react';
import { addCategoryAPI } from '../../api/categoryAPI';
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
      <button onClick={() => setShowForm(true)}>Add Category</button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="newCategoryTitle" className={styles.label}>Title</label>
      <input
        type="text"
        id="newCategoryTitle"
        className={styles.input}
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        required
      />
      <label htmlFor="newCategoryDescription" className={styles.label}>Description</label>
      <input
        type="text"
        id="newCategoryDescription"
        className={styles.input}
        value={descriptionInput}
        onChange={(e) => setDescriptionInput(e.target.value)}
        required
      />
      <div>
        <button type="button" onClick={() => setShowForm(false)}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default AddCategory;
