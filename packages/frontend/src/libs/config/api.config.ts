import axios from 'axios';

const url = 'http://localhost:5001';
const headers = {
    'content-type': 'application/json',
};

export const api = axios.create({
    baseURL: url + '/',
    headers: headers,
});
