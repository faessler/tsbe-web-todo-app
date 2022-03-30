import React, { useState } from 'react';
import useTodoContext from '../../context/todo/useTodoContext';
import { STATUS } from '../../constants/api';
import Button from '../Button/Button';
import Error from '../Error/Error';
import Input from '../Input/Input';
import styles from './AddTodo.module.scss';

const AddTodo = () => {
  const { add } = useTodoContext();

  const [showForm, setShowForm] = useState(false);
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    add.action(titleInput, descriptionInput).then((data) => {
      if (data.status === 200) {
        setTitleInput('');
        setDescriptionInput('');
        setShowForm(false);
      }
    });
  };

  return !showForm ? (
    <Button onClick={() => setShowForm(true)}>Add todo</Button>
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

export default AddTodo;
