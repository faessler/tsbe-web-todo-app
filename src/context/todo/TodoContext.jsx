import { createContext } from 'react';
import { STATUS } from '../../constants/api';

const TodoContext = createContext({
  status: STATUS.INITIAL,
  todos: [],
  add: {
    action: () => {},
    status: STATUS.INITIAL,
    error: '',
  },
  update: {
    action: () => {},
    status: STATUS.INITIAL,
    error: '',
  },
  remove: {
    action: () => {},
    status: STATUS.INITIAL,
    error: '',
  },
});

export default TodoContext;
