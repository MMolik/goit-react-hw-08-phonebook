// src/components/App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import { fetchContacts } from '../redux/contacts/contactsOperations'; 

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
