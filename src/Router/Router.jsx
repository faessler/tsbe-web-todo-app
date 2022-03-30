import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from '../context/auth';
import CategoryProvider from '../context/category/CategoryProvider';
import Home from '../pages/App/App';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NotFound from '../pages/NotFound/NotFound';
import Template from '../components/Template/Template';

const Router = () => (
  <AuthProvider>
    <CategoryProvider>
      <Template>
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Template>
    </CategoryProvider>
  </AuthProvider>
);

export default Router;
