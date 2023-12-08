import api from '../utils/api';
import { setAlert } from './alert';
import { GET_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, CUSTOMER_ERROR} from './types';
export const getCustomers = () => async (dispatch) => {
    try {
      const res = await api.get('/customer/all');
      console.log('----------------response get', res.data);
      dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CUSTOMER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  export const deleteCustomer = (id) => async (dispatch) => {
    try {
      await api.delete(`/customer/delete/${id}`);
  
      dispatch({
        type: DELETE_CUSTOMER,
        payload: id
      });
  
      dispatch(setAlert('Customer name Removed', 'success'));
    } catch (err) {
      dispatch({
        type: CUSTOMER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  export const addCustomer = (customerData) => async (dispatch) => {
    try {
      const res = await api.post('/customer/add', customerData);
      
      dispatch({
        type: ADD_CUSTOMER,
        payload: res.data
      });
  
      dispatch(setAlert('Customer name Created', 'success'));
    } catch (err) {
      dispatch({
        type: CUSTOMER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };