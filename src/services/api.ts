import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happy-bcknd.herokuapp.com',
})

export default api;