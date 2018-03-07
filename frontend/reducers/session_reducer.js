import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state={currentUser: null}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
