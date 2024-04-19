import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LoginPage from './component/pages/loginPage';
import ForgetPassword from './component/template/password/forgetPassword';
import RegisterPage from './component/pages/registrePage';

const AppRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route  path="/" element={<LoginPage  />}  />
      <Route path="/inscription" element={<RegisterPage />}  />
      <Route path="/mot-de-passe-oublie" element={<ForgetPassword />}  />
    </Routes>
    </Router>
  );
};

export default AppRoutes;
