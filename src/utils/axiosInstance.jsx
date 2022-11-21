import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://15.228.220.238:3000',
  httpsAgent: {
    rejectUnauthorized: false
  }
});

export default axiosInstance;
