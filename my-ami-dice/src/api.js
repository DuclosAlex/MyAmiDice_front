import axios from "axios";

const api = axios.create({
    baseURL: 'https://projet-littleroll20-back.vercel.app/'
});

export default api;