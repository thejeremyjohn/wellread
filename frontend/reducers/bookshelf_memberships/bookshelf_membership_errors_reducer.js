import {
  RECEIVE_BOOKSHELF_MEMBERSHIP_ERRORS, CLEAR_BOOKSHELF_MEMBERSHIP_ERRORS
} from '../../actions/bookshelf_membership_actions';

export default (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKSHELF_MEMBERSHIP_ERRORS:
      return action.errors;
    case CLEAR_BOOKSHELF_MEMBERSHIP_ERRORS:
      return [];
    default:
      return state;
  }
};
