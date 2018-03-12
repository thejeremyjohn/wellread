import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import books from './books/books_reducer';
import bookshelves from './bookshelves/bookshelves_reducer';

export default combineReducers({
  books,
  bookshelves
});
