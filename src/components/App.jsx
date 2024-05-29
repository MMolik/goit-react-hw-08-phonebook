// App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import { fetchContacts } from '../redux/contacts/contactsOperations'; 
import { ChakraProvider } from "@chakra-ui/react"; 

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Navigation /> {/* Renderujemy nawigację */}
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
