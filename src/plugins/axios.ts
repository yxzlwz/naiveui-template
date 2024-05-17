import axios from 'axios';
import naiveui from './naiveui';

export const Axios = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

Axios.defaults.transformResponse = [
  (data, headers) => {
    if (
      typeof data === 'string' &&
      headers['content-type'] === 'application/json'
    ) {
      try {
        data = JSON.parse(data);
      } catch (e) {}
    }
    return data;
  },
];

export const errorHandler = (err: any) => {
  naiveui.message.error(err.message);
};

export default Axios;
