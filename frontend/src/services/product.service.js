// src/services/product.service.js
import axios from 'axios';
import authService from './auth.service';

const API_URL = 'http://localhost:8080/api/products';

const getAuthHeader = () => {
  const user = authService.getCurrentUser();
  return user ? { 'x-access-token': user.accessToken } : {};
};

export const getProducts = () => axios.get(API_URL, { headers: getAuthHeader() });
export const getProduct = (id) => axios.get(`${API_URL}/${id}`, { headers: getAuthHeader() });
export const createProduct = (data) => axios.post(API_URL, data, { headers: getAuthHeader() });
export const updateProduct = (id, data) => axios.put(`${API_URL}/${id}`, data, { headers: getAuthHeader() });
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`, { headers: getAuthHeader() });