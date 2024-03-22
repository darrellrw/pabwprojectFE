import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
    baseURL: BASE_URL,
});

API.defaults.headers.post["Content-Type"] = "application/json";

export default API;