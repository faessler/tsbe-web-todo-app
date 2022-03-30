import { useContext } from 'react';
import ContentContext from './CategoryContext';

const useContentContext = () => useContext(ContentContext);

export default useContentContext;
