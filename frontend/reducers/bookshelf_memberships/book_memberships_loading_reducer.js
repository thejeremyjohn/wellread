// not rendering anything so this is useless

import merge from 'lodash/merge';

import {
  START_LOADING_BOOKSHELF_MEMBERSHIP,
  RECEIVE_BOOKSHELF_MEMBERSHIP,
  RECEIVE_BOOKSHELF_MEMBERSHIP_ERRORS,
  START_LOADING_BOOKSHELF_MEMBERSHIPS,
  RECEIVE_BOOKSHELF_MEMBERSHIPS
} from '../../actions/book_actions';

const initialState = {
  membershipLoading: false,
  membershipsLoading: false,
};

const bookshelfMembershipLoadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_BOOKSHELF_MEMBERSHIP:
      return merge({}, state, { membershipLoading: true });
    case RECEIVE_BOOKSHELF_MEMBERSHIP:
    case RECEIVE_BOOKSHELF_MEMBERSHIP_ERRORS:
      return merge({}, state, { membershipLoading: false });
    case START_LOADING_BOOKSHELF_MEMBERSHIPS:
      return merge({}, state, { membershipsLoading: true });
    case RECEIVE_BOOKSHELF_MEMBERSHIPS:
      return merge({}, state, { membershipsLoading: false });

    default:
      return state;
  }
};

export default bookshelfMembershipLoadingReducer;
