import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://15.228.220.238:3000'
});

export default axiosInstance;
