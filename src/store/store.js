import { Map } from 'immutable';

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

const initialState = Map({
  badges: Map()
});

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