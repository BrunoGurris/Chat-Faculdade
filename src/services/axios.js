import axios from 'axios'

const token = localStorage.getItem('_token')

const api = axios.create({
    baseURL: 'https://localhost:8000/api',
    headers: {'Authorization': 'Bearer ' + token},
    timeout: 10000
});

export default api