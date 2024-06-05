import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Konfiguracja interceptorów dla axios, aby dodać token do każdego żądania
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://connections-api.herokuapp.com/users/signup', userData);
      const { user, token } = response.data;
      localStorage.setItem('token', token); // Zapisz token w localStorage
      return { user, token };
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://connections-api.herokuapp.com/users/login', userData);
      const { user, token } = response.data;
      localStorage.setItem('token', token); // Zapisz token w localStorage
      return { user, token };
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('https://connections-api.herokuapp.com/users/logout');
      localStorage.removeItem('token'); // Usuń token z localStorage
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: error.message });
    }
  }
);
