import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Update the backend API URL

export const fetchProperties = async () => {
  try {
    const response = await axios.get(`${API_URL}/properties`);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData); // Updated endpoint
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const addProperty = async (propertyData, token) => {
  try {
    const response = await axios.post(`${API_URL}/properties`, propertyData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding property:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData); 
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};
