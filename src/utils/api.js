import axios from 'axios';
import store from 'store/index';
import { LOGOUT } from '../actions/types';
const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL || `http://${window.location.hostname}:5000/api`,
  baseURL: process.env.REACT_APP_API_URL || 'mongodb+srv://luckyangel314:OAql28IVemHJQUYU@cluster0.hrff1nk.mongodb.net/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);
export default api;