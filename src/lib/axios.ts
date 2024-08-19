import axios from 'axios';
import { request } from '@/lib/constant';

const API = axios.create({
  baseURL: request,
  timeout: 60000
});

export { API as axios }
