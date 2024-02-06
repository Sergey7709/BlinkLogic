import axios from 'axios';

export const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://front-test.hex.team/',
});
