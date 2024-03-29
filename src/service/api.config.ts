import axios from 'axios';
import { baseUrl } from '@/service/constants.api';

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const newToken = localStorage.getItem('token');
    const newConfig = { ...config };
    if (newToken) newConfig.headers.Authorization = `Bearer ${newToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);
