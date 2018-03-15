import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import book from './books/book_errors_reducer';
import bookshelf from './bookshelves/bookshelf_errors_reducer';
import membership from './bookshelf_memberships/bookshelf_membership_errors_reducer';

const errorsReducer = combineReducers({
  session,
  book,
  bookshelf,
  membership
});

export default errorsReducer;
