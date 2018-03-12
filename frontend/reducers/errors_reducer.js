import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import book from './book_errors_reducer';
import bookshelf from './bookshelf_errors_reducer';

const errorsReducer = combineReducers({
  session,
  book,
  bookshelf
});

export default errorsReducer;
