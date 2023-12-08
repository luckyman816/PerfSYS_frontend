import {
    REGISTER_SUCCESS,
    //REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    //LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED,
    GET_USERS,
    SET_LANGUAGE
  } from '../../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: [],
    users: [],
    language: 'English'
  };
  function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload.user
        };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          ...payload,
          user: payload.user,
          isAuthenticated: true,
          loading: true
        };
      case SET_LANGUAGE:
        return {
          ...state,
          language: payload
        }
      case ACCOUNT_DELETED:
      case GET_USERS:
        return {
          ...state,
          users: payload,
          isAuthenticated: true,
          loading: false
        }
      case AUTH_ERROR:
      case LOGOUT:
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: []
        };
      default:
        return state;
    }
  }
  
  export default authReducer;
  