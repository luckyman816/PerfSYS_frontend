import { GET_USERS_SATISTICS, SATISTICS_ERR } from 'actions/types';
const initialState = {
  users: [''],
  error: {},
  loading: true
};

function satisticsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_SATISTICS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case SATISTICS_ERR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
export default satisticsReducer;
