import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/contacts/contactsOperations';
import { Box, Heading, Button, Flex, Spacer } from '@chakra-ui/react'; // Dodane importy z Chakra UI

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(formData));
    setFormData({ name: '', number: '' });
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <Box
        maxW="400px"
        m="auto"
        mt={8}
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        bg="gray.100"
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" mb={4} textAlign="center" color="purple.500">
          Contacts
        </Heading>
        <form onSubmit={handleSubmit}>
          <Box mb={4}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleChange}
            />
          </Box>
          <Button type="submit" colorScheme="purple" size="md" w="100%">
            Add Contact
          </Button>
        </form>
      </Box>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Flex align="center">
              <Box
                w="10px"
                h="10px"
                borderRadius="50%"
                bg="purple.500"
                mr={4}
              ></Box>{' '}
              {}
              <Box>
                {contact.name}: {contact.number}
              </Box>
              <Spacer />
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </Button>{' '}
              {}
            </Flex>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
