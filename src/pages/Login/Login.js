import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations'; // Zaimportuj funkcję logowania z operacji autoryzacji

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })); // Wywołaj funkcję logowania z danymi email i hasłem
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box maxW="400px" m="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg" bg="gray.100" boxShadow="lg">
      <Heading as="h2" size="lg" mb={4} textAlign="center" color="purple.500">Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
        </FormControl>
        <Button type="submit" colorScheme="purple" size="md" w="100%">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
