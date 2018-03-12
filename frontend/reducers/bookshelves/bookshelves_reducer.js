import merge from 'lodash/merge';

import {
  RECEIVE_BOOKSHELF, RECEIVE_BOOKSHELVES
} from '../../actions/bookshelf_actions';

const bookshelvesReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKSHELF:
      return merge({}, state, {[action.bookshelf.id]: action.bookshelf});
    case RECEIVE_BOOKSHELVES:
      return merge({}, state, action.bookshelves);
    default:
      return state;
  }
};

export default bookshelvesReducer;
