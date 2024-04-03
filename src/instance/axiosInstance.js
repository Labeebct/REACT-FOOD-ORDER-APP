  import axios from 'axios';

  const instance = axios.create({
    baseURL: 'http://51.20.83.91/api',
    timeout: 5000, 
  });

  instance.interceptors.request.use((config) => {

    const token = localStorage.getItem('token')
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config

  },(error) => {
    console.log(error);
    return Promise.reject(error)
  })

  export default instance;    
          