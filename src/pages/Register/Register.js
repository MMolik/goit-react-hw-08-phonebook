import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { selectIsLoading, selectError } from '../../redux/auth/authSlice';
import { Flex, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [formData, setFormData] = useState({
    name: '', // Dodane pole name
    email: '', 
    password: '' 
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel> {/* Dodane pole name z odpowiednim label */}
          <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" /> {/* Placeholder dla pola name */}
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
        </FormControl>
        <Button type="submit" colorScheme="teal" isLoading={isLoading}>Register</Button>
      </form>
      {error && <Text color="red.500" mt={4}>{error}</Text>}
    </Flex>
  );
};

export default Register;
