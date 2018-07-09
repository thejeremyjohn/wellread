import merge from 'lodash/merge';

import {
  START_LOADING_REVIEW, RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS,
  START_LOADING_REVIEWS, RECEIVE_REVIEWS
} from '../../actions/review_actions';

const initialState = {
  reviewShowLoading: false,
  reviewIndexLoading: false,
};

const reviewsLoadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_REVIEW:
      return merge({}, state, { reviewShowLoading: true });
    case RECEIVE_REVIEW:
    case RECEIVE_REVIEW_ERRORS:
      return merge({}, state, { reviewShowLoading: false });
    case START_LOADING_REVIEWS:
      return merge({}, state, { reviewIndexLoading: true });
    case RECEIVE_REVIEWS:
      return merge({}, state, { reviewIndexLoading: false });

    default:
      return state;
  }
};

export default reviewsLoadingReducer;
