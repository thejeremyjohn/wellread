import { combineReducers } from 'redux';

import errors from './errors_reducer';
import loading from './loading_reducer';

export default combineReducers({
  errors,
  loading,
});
