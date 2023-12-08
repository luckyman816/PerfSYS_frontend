import api from '../utils/api';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_USERS, SET_LANGUAGE } from './types';
/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/user/auth');
    console.log("-----------loadUser--------------", res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
export const getUsers = () => async (dispatch) => {
  try {
    const res = await api.get('/user/all');

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/user/register', formData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await api.post('/user/login', body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    setAlert('Order Created', 'success');
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response?.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};
export const setEnvLanguage = (language) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LANGUAGE,
      payload: language
    })
  } catch {

  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
