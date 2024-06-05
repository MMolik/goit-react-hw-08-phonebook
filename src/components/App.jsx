import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { selectUser } from '../redux/auth/authSlice';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import { logout } from '../redux/auth/authOperations';
import Navigation from '../components/Navigation/Navigation';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/contacts" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/contacts" />} />
          <Route path="/contacts" element={user ? <ContactsPage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
