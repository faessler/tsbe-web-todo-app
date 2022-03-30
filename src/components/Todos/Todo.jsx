import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import useTodoContext from '../../context/todo/useTodoContext';
import debounce from '../../helpers/debounce';
import styles from './Todo.module.scss';

const Todo = ({ id, title, description, done }) => {
  const { update, remove } = useTodoContext();

  const handleDoneChange = (e) => {
    const isChecked = e.target.checked;
    console.log('checked', e.target.checked);
    update.action(id, { title, description, done: isChecked });
  };

  const handleTitleChange = useCallback(
    debounce((e) => {
      update.action(id, { title: e.target.value });
    }, 600),
    []
  );

  const handleDescriptionChange = useCallback(
    debounce((e) => {
      update.action(id, { description: e.target.value });
    }, 600),
    []
  );

  return (
    <div className={styles.todo}>
      <input className={styles.checkbox} type="checkbox" onChange={handleDoneChange} checked={done} />
      <label className={styles.content}>
        <input className={styles.title} type="text" defaultValue={title} onChange={handleTitleChange} />
        <hr className={styles.ruler} />
        <textarea
          className={styles.description}
          defaultValue={description}
          onChange={handleDescriptionChange}
          rows="4"
        />
      </label>
      <button className={styles.delete} onClick={() => remove.action(id)}>
        ✘
      </button>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  done: PropTypes.bool,
};

export default Todo;
