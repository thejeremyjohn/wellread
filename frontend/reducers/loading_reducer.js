import merge from 'lodash/merge';
import {
  RECEIVE_BOOKS, START_LOADING_BOOKS,
} from '../actions/book_actions';

const initialState = {
  indexLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKS:
      return merge({}, state, { indexLoading: false });
    case START_LOADING_BOOKS:
      return merge({}, state, { indexLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
