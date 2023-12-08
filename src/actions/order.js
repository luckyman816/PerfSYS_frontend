import api from '../utils/api';
import { setAlert } from './alert';
import { GET_ORDERS, ORDER_ERROR, UPDATE_ORDER, DELETE_ORDER, ADD_ORDER, GET_ORDER, GET_SCORE_CUSTOMER, GET_SCORE_FACTORY, GET_SCORE_OWNER , COMPLETE_ORDER} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Get posts
export const getOrders = (id) => async (dispatch) => {
  try {
    const res = await api.get(`order/${id}`);
    dispatch({
      type: GET_ORDERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
export const getScoreByCustomer = (customer) => async (dispatch) => {
  try {
    const res = await api.get(`order/getScoreCustomer/${customer}`);
    dispatch({
      type: GET_SCORE_CUSTOMER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
export const getScoreByFactory = (factory) => async (dispatch) => {
  try {
    const res = await api.get(`order/getScoreFactory/${factory}`);
    dispatch({
      type: GET_SCORE_FACTORY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
export const getScoreByOwner = (owner) => async (dispatch) => {
  try {
    const res = await api.get(`order/getScoreOwner/${owner}`);
    dispatch({
      type: GET_SCORE_OWNER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// update order
export const updateOrder = (id, formData) => async (dispatch) => {
  try {

    const res = await api.put(`/order/${id}`, formData);
    dispatch({
      type: UPDATE_ORDER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//update score
export const updateScore = (id, userId, formData ) => async (dispatch) => {
  try {
    const res = await api.put(`/order/complete/${id}/${userId}`, formData);
    console.log("---------------complete----------------",id, userId, formData);
    dispatch ({
      type: COMPLETE_ORDER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete post
export const deleteOrder = (id) => async (dispatch) => {
  try {
    await api.delete(`/order/${id}`);

    dispatch({
      type: DELETE_ORDER,
      payload: id
    });

    dispatch(setAlert('Order Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add post
export const addOrder = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/order/create', formData);
    console.log("add_new", formData);
    dispatch({
      type: ADD_ORDER,
      payload: res.data
    });

    dispatch(setAlert('Order Created', 'success'));
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get post
export const getOrder = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/order/${id}`);

    dispatch({
      type: GET_ORDER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
