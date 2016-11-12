import { fromJS } from 'immutable';

const routeState = fromJS({
  activeView: 'HOME',
  views: {
    1: {
      label: 'Home',
      index: 0
    },
    2: {
      label: 'Badges',
      index: 0
    }
  }
});

export default routeState;