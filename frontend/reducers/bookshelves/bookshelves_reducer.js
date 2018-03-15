import merge from 'lodash/merge';

// added experiment CLEAR_BOOKSHELVES

import {
  RECEIVE_BOOKSHELF, RECEIVE_BOOKSHELVES, CLEAR_BOOKSHELVES
} from '../../actions/bookshelf_actions';

const bookshelvesReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_BOOKSHELVES:
      return {};
    case RECEIVE_BOOKSHELF:
      return merge({}, state, {[action.bookshelf.id]: action.bookshelf});
    case RECEIVE_BOOKSHELVES:
      return merge({}, state, action.bookshelves);
    default:
      return state;
  }
};

export default bookshelvesReducer;
