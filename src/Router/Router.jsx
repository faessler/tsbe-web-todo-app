import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from '../context/auth';
import Home from '../pages/App/App';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NotFound from '../pages/NotFound/NotFound';
import Template from '../components/Template/Template';

const Router = () => (
  <AuthProvider>
    <Template>
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Template>
  </AuthProvider>
);

export default Router;
