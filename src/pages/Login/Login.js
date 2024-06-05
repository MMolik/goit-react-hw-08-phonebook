import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę obsługi formularza logowania
  };

  return (
    <Box maxW="400px" m="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg" bg="gray.100" boxShadow="lg">
      <Heading as="h2" size="lg" mb={4} textAlign="center" color="purple.500">Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter email" />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter password" />
        </FormControl>
        <Button type="submit" colorScheme="purple" size="md" w="100%">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
