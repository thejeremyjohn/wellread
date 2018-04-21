import merge from 'lodash/merge';

// added experiment CLEAR_BOOKSHELVES

import {
  RECEIVE_BOOKSHELF,
  RECEIVE_BOOKSHELVES,
  CLEAR_BOOKSHELVES,
  REMOVE_BOOKSHELF
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

    case REMOVE_BOOKSHELF:
      const newState = merge({}, state);
      delete newState[action.bookshelf.id];
      return newState;
      
    default:
      return state;
  }
};

export default bookshelvesReducer;
