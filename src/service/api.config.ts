import axios from 'axios';

const token = localStorage.getItem('token');
export const instance = axios.create({
  baseURL: 'https://front-test.hex.team/',
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
