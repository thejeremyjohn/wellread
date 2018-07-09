import merge from 'lodash/merge';

import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  CLEAR_REVIEWS,
  REMOVE_REVIEW
} from '../../actions/review_actions';

const reviewsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_REVIEWS:
      return {};
    case RECEIVE_REVIEW:
      // console.log(`state=`);
      // console.log(state);
      // console.log(`review.id=${[action.review.id]}`);
      // console.log(`review=`);
      // console.log(action.review);
      // console.log({[action.review.id]: action.review});
      // return merge({}, state, action.review);
      return merge({}, state, {[action.review.id]: action.review});
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);

    case REMOVE_REVIEW:
      const newState = merge({}, state);
      delete newState[action.review.id];
      return newState;

    default:
      return state;
  }
};

export default reviewsReducer;
