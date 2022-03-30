import React from 'react';
import CategoryProvider from '../../context/category/CategoryProvider';
import Categories from '../../components/Categories/Categories';

const App = () => (
  <>
    <h1>TODOs</h1>
    <CategoryProvider>
      <Categories />
    </CategoryProvider>
  </>
);

export default App;
