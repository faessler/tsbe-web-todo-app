import { createContext } from 'react';
import { STATUS } from '../../constants/api';

const ContentContext = createContext({
  status: STATUS.INITIAL,
  categories: [],
  add: {
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

export default ContentContext;
