// src/redux/contacts/contactsOperations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk('contacts/addContact', async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async contactId => {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
});
