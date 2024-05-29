import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Flex } from "@chakra-ui/react";

const Navigation = () => (
  <Flex justifyContent="center" width="100%" py={4} bg="gray.200"> {/* Używamy Flex do rozmieszczenia przycisków na całej szerokości strony */}
    <NavLink to="/register">
      <Button
        as="button"
        variant="solid"
        size="lg"
        _hover={{ bg: "teal.500" }} /* Zmieniamy kolor tła po najechaniu myszką */
        mr={4}
        colorScheme="blue" /* Ustawiamy schemat kolorów przycisku */
      >
        Register
      </Button>
    </NavLink>
    <NavLink to="/login">
      <Button
        as="button"
        variant="solid"
        size="lg"
        _hover={{ bg: "teal.500" }} /* Zmieniamy kolor tła po najechaniu myszką */
        mr={4}
        colorScheme="green" /* Ustawiamy schemat kolorów przycisku */
      >
        Login
      </Button>
    </NavLink>
    <NavLink to="/contacts">
      <Button
        as="button"
        variant="solid"
        size="lg"
        _hover={{ bg: "teal.500" }} /* Zmieniamy kolor tła po najechaniu myszką */
        colorScheme="orange" /* Ustawiamy schemat kolorów przycisku */
      >
        Contacts
      </Button>
    </NavLink>
  </Flex>
);

export default Navigation;
