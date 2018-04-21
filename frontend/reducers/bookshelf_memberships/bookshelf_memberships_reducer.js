import merge from 'lodash/merge';

import {
  CLEAR_BOOKSHELF_MEMBERSHIPS,
  RECEIVE_BOOKSHELF_MEMBERSHIP,
  RECEIVE_BOOKSHELF_MEMBERSHIPS
} from '../../actions/bookshelf_membership_actions';

const bookshelfMembershipsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_BOOKSHELF_MEMBERSHIPS:
      return {};
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
