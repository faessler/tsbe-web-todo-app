import React from 'react';
import PropTypes from 'prop-types';
import { STATUS } from '../../constants/api';
import { useTodos } from '../../hooks/useTodos';
import Button from '../Button/Button';

const Todos = ({ id }) => {
  const { status, todos, addTodo, removeTodo } = useTodos(id);
  return (
    <div>
      {status === STATUS.LOADING && 'LOADING...'}
      {status === STATUS.FAILURE && "ERROR! Couldn't load the todos."}
      {status === STATUS.SUCCESS && (
        <div>
          {todos.map((item) => (
            <div key={item.id}>
              {item.title} {item.description}
              <button onClick={() => removeTodo(item.id)}>X</button>
            </div>
          ))}
          <Button onClick={() => addTodo('Title', 'DesssCr')}>Add todo</Button>
        </div>
      )}
    </div>
  );
};

Todos.propTypes = {
  id: PropTypes.number,
};

export default Todos;
