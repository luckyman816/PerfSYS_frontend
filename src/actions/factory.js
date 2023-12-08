import api from '../utils/api';
import { setAlert } from './alert';
import { GET_FACTORIES, ADD_FACTORY, DELETE_FACTORY, FACTORY_ERROR} from './types';
export const getFactories = () => async (dispatch) => {
    try {
      const res = await api.get('factory/all');
      console.log('----------------response get', res.data);
      dispatch({
        type: GET_FACTORIES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FACTORY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  export const deleteFactory = (id) => async (dispatch) => {
    try {
      await api.delete(`/factory/delete/${id}`);
  
      dispatch({
        type: DELETE_FACTORY,
        payload: id
      });
  
      dispatch(setAlert('Factory name Removed', 'success'));
    } catch (err) {
      dispatch({
        type: FACTORY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  export const addFactory = (factoryData) => async (dispatch) => {
    try {
      console.log("ffffffffffffff",factoryData)
      const res = await api.post('/factory/add', factoryData);
      
      dispatch({
        type: ADD_FACTORY,
        payload: res.data
      });
  
      dispatch(setAlert('Factory name Created', 'success'));
    } catch (err) {
      dispatch({
        type: FACTORY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };