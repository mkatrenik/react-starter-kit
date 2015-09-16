import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-react-router';


function users(state = ['foo']) {
  return [...state];
}

export default combineReducers({ users, router });
