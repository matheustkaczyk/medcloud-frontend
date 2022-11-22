import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://18.231.120.5:3000'
});

export default axiosInstance;
