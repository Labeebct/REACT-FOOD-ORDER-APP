import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://foodapi.labio.shop'
});

instance.interceptors.request.use((config) => {

  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config

}, (error) => {
  console.log(error);
  return Promise.reject(error)
})

export default instance;
