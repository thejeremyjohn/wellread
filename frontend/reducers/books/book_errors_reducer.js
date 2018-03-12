import {
  RECEIVE_BOOK_ERRORS, CLEAR_BOOK_ERRORS
} from '../../actions/book_actions';

export default (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOK_ERRORS:
      return action.errors;
    case CLEAR_BOOK_ERRORS:
      return [];
    default:
      return state;
  }
};
