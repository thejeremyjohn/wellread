import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import books from './books/books_reducer';
import bookshelves from './bookshelves/bookshelves_reducer';
import memberships from './bookshelf_memberships/bookshelf_memberships_reducer';

export default combineReducers({
  books,
  bookshelves,
  memberships
});
