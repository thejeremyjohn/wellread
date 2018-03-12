import merge from 'lodash/merge';

import {
  START_LOADING_BOOK, RECEIVE_BOOK, RECEIVE_BOOK_ERRORS,
  START_LOADING_BOOKS, RECEIVE_BOOKS
} from '../../actions/book_actions';

const initialState = {
  bookShowLoading: false,
  bookIndexLoading: false,
};

const booksLoadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_BOOK:
      return merge({}, state, { bookShowLoading: true });
    case RECEIVE_BOOK:
    case RECEIVE_BOOK_ERRORS:
      return merge({}, state, { bookShowLoading: false });
    case START_LOADING_BOOKS:
      return merge({}, state, { bookIndexLoading: true });
    case RECEIVE_BOOKS:
      return merge({}, state, { bookIndexLoading: false });

    default:
      return state;
  }
};

export default booksLoadingReducer;
