import React from 'react';
import { STATUS } from '../../constants/api';
import useTodoContext from '../../context/todo/useTodoContext';
import AddTodo from './AddTodo';
import Todo from './Todo';
import Error from '../Error/Error';
import styles from './Todos.module.scss';

const Todos = () => {
  const { status, todos } = useTodoContext();

  return (
    <>
      {status === STATUS.LOADING && <i>LOADING...</i>}
      {status === STATUS.FAILURE && <Error>Error: Couldn't load the todos.</Error>}
      {status === STATUS.SUCCESS && (
        <>
          <div className={styles.todos}>
            {todos
              .sort((a, b) => a.done - b.done)
              .map(({ id, title, description, done }) => (
                <Todo key={id} id={id} title={title} description={description} done={done} />
              ))}
          </div>
          <AddTodo />
        </>
      )}
    </>
  );
};

export default Todos;
