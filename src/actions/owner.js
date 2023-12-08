import api from '../utils/api';
import { setAlert } from './alert';
import { GET_ONWERS, ADD_OWNER, DELETE_ONWER, OWNER_ERR} from './types';
export const getOwners = () => async (dispatch) => {
    try {
      const res = await api.get('owner/all');
      console.log('----------------response get', res.data);
      dispatch({
        type: GET_ONWERS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: OWNER_ERR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  export const deleteOwner = (id) => async (dispatch) => {
    try {
      await api.delete(`/owner/delete/${id}`);
  
      dispatch({
        type: DELETE_ONWER,
        payload: id
      });
  
      dispatch(setAlert('Owner name Removed', 'success'));
    } catch (err) {
      dispatch({
        type: OWNER_ERR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  export const addOwner = (ownerData) => async (dispatch) => {
    try {
      console.log("ffffffffffffff",ownerData);
      const res = await api.post('/owner/add', ownerData);
      
      dispatch({
        type: ADD_OWNER,
        payload: res.data
      });
  
      dispatch(setAlert('Owner name Created', 'success'));
    } catch (err) {
      dispatch({
        type: OWNER_ERR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };