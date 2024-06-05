import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/authSlice';
import { logout } from '../../redux/auth/authOperations';

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Flex justifyContent="center" width="100%" py={4} bg="gray.200">
      {!user ? (
        <>
          <NavLink to="/register">
            <Button
              variant="solid"
              colorScheme="blue"
              mr={4}
            >
              Register
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button
              variant="solid"
              colorScheme="green"
              mr={4}
            >
              Login
            </Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/contacts">
            <Button
              variant="solid"
              colorScheme="orange"
              mr={4}
            >
              Contacts
            </Button>
          </NavLink>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      )}
    </Flex>
  );
};

export default Navigation;
