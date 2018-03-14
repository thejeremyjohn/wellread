import merge from 'lodash/merge';

import {
  RECEIVE_BOOKSHELF_MEMBERSHIP, RECEIVE_BOOKSHELF_MEMBERSHIPS
} from '../../actions/bookshelf_membership_actions';

const bookshelfMembershipsReducer = (state={}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKSHELF_MEMBERSHIP:
      return merge(
        {},
        state,
        {[action.bookshelfMembership.id]: action.bookshelfMembership}
      );
    case RECEIVE_BOOKSHELF_MEMBERSHIPS:
      return merge({}, state, action.bookshelfMemberships);
    default:
      return state;
  }
};

export default bookshelfMembershipsReducer;
