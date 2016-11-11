import initialState from './initial/routeState';

const actionTypes = {
  pushRoute: 'actionTypes.pushRoute',
  popRoute: 'actionTypes.popRoute',
  switchTab: 'actionTypes.switchTab'
};

export function pushRoute(){
  return {
    type: actionTypes.pushRoute
  }
};

export function popRoute(){
  return {
    type: actionTypes.popRoute
  }
};

export function switchTab(){
  return {
    type: actionTypes.switchTab
  }
};

function routeReducer(state = initialState, action) {
  switch(action.type){
    case actionTypes.pushRoute:
    case actionTypes.popRoute:
    case actionTypes.switchTab:
    default:
      return state;
  }
};

export default routeReducer;