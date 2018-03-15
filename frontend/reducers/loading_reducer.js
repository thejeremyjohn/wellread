import { combineReducers } from 'redux';

import books from './books/books_loading_reducer';
import bookshelves from './bookshelves/bookshelves_loading_reducer';
import memberships from './bookshelf_memberships/bookshelf_memberships_loading_reducer';

export default combineReducers({
  books,
  bookshelves,
  memberships
});
