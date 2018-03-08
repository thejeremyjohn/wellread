import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import booksReducer from './books_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  books: booksReducer,
  errors: errorsReducer
});

export default rootReducer;
