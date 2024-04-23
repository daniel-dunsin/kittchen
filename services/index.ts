import secrets from '@/lib/constants/secrets.const';
import axios from 'axios';

const http = axios.create({
  baseURL: secrets.serverUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { http };
