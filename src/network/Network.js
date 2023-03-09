
import axios from "axios";
import { parse, stringify } from 'qs'
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
export default axiosClient;
