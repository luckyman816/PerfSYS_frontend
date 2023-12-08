import api from "utils/api";
import { setAlert } from './alert';
import { GET_USERS_SATISTICS, SATISTICS_ERR } from './types';

export const getUsersSatistics = () => async (dispatch) => {
    try {
      const res = await api.get('satistics/users');
      console.log('----------------response get', res.data);
      dispatch({
        type: GET_USERS_SATISTICS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: SATISTICS_ERR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };