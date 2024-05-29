import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Contacts = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    number: ''
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
    dispatch(addContact(formData));
    setFormData({ name: '', number: '' });
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="80vh">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Number</FormLabel>
          <Input type="text" name="number" value={formData.number} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="teal">Add Contact</Button>
      </form>
    </Flex>
  );
};

export default Contacts;
