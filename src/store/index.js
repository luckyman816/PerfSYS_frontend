// third-party
import {createStore, applyMiddleware} from 'redux'
// project import
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import setAuthToken from 'utils/setAuthToken';
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;
