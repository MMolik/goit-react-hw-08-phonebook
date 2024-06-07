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
    name: '',
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
    <Flex flexDirection="column" alignItems="center" maxW="400px" m="auto" mt={8} p={4} bg="gray.100" borderRadius="lg" boxShadow="lg">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
        </FormControl>
        <Button type="submit" colorScheme="purple" size="md" w="100%" mt={4} isLoading={isLoading}>Register</Button>
      </form>
      {error && <Text color="red.500" mt={4}>{error}</Text>}
    </Flex>
  );
};

export default Register;
