import { ADD_ORDER_HISTORY, GET_ORDERS_HISTORY } from '../../actions/types';
const initialState = {
  orders_history: [''],
  order_history: null,
  loading: true,
  error: {}
};

function order_history(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_ORDERS_HISTORY:
        return {
          ...state,
          orders_history: payload,
          loading: false
        };
      case ADD_ORDER_HISTORY:
        return {
          ...state,
          orders_history: [payload, ...state.orders_history],
          loading: false
        }
        default:
         return state;
    }
}
export default order_history;