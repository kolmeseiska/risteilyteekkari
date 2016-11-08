import { Map } from 'immutable';
import initialState from './initialState';

const actionTypes = {
  addBadge: 'actionTypes.addBadge'
};

const badgeActions = {
  addBadge(badge){
    return {
      type: actionTypes.addBadge,
      payload: badge
    }
  }
};

const badgeReducer = (state = initialState, action) => {
  switch(action.type){
    case 1:
      return;
    case 2:
      return;
    default:
      return state;
  }
};

export default badgeReducer;