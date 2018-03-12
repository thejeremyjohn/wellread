import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import books from './books_reducer';
import bookshelves from './bookshelves_reducer';

export default combineReducers({
  books,
  bookshelves
});
