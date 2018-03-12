import merge from 'lodash/merge';

import {
  START_LOADING_BOOKSHELF, RECEIVE_BOOKSHELF, RECEIVE_BOOKSHELF_ERRORS,
  START_LOADING_BOOKSHELVES, RECEIVE_BOOKSHELVES
} from '../../actions/bookshelf_actions';

const initialState = {
  bookshelfShowLoading: false,
  bookshelfIndexLoading: false,
};

const bookshelvesLoadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_BOOKSHELF:
      return merge({}, state, { bookshelfShowLoading: true });
    case RECEIVE_BOOKSHELF:
    case RECEIVE_BOOKSHELF_ERRORS:
      return merge({}, state, { bookshelfShowLoading: false });
    case START_LOADING_BOOKSHELVES:
      return merge({}, state, { bookshelfIndexLoading: true });
    case RECEIVE_BOOKSHELVES:
      return merge({}, state, { bookshelfIndexLoading: false });

    default:
      return state;
  }
};

export default bookshelvesLoadingReducer;
