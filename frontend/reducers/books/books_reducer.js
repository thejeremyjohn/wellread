import merge from 'lodash/merge';

import {
  CLEAR_BOOK, RECEIVE_BOOK, RECEIVE_BOOKS
} from '../../actions/book_actions';

const booksReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_BOOK:
      return {};
    case RECEIVE_BOOK:
      return merge({}, state, {[action.book.id]: action.book});
    case RECEIVE_BOOKS:
      return merge({}, state, action.books);
    default:
      return state;
  }
};

export default booksReducer;
