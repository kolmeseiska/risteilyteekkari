import { combineReducers, createStore } from 'redux';
import badges from './badges';
import route from './route';

const reducer = combineReducers(
  badges,
  route
);

export default createStore(reducer);