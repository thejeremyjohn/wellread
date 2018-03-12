import {
  RECEIVE_BOOKSHELF_ERRORS, CLEAR_BOOKSHELF_ERRORS
} from '../actions/bookshelf_actions';

export default (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKSHELF_ERRORS:
      return action.errors;
    case CLEAR_BOOKSHELF_ERRORS:
      return [];
    default:
      return state;
  }
};
