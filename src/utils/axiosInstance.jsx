import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://18.231.120.5:3000'
});

export default axiosInstance;
