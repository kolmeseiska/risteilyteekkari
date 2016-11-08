import { Map } from 'immutable';
import initialState from './initialState';

const actionTypes = {
  obtainBadge: 'actionTypes.obtainBadge'
};

const badgeActions = {
  obtainBadge(badgeId){
    return {
      type: actionTypes.obtainBadge,
      payload: badgeId
    }
  }
};

const badgeReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.obtainBadge:
      return state.updateIn(['badges', action.payload, 'achieved'], true)
        .update('collected', state.get('collected') + 1);
    case 2:
      return;
    default:
      return state;
  }
};

export default badgeReducer;