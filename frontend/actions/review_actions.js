import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const START_LOADING_REVIEW = 'START_LOADING_REVIEW';
export const START_LOADING_REVIEWS = 'START_LOADING_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';



export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const startLoadingReview = () => ({
  type: START_LOADING_REVIEW
});

export const startLoadingReviews = () => ({
  type: START_LOADING_REVIEWS
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

export const createReview = (bookId, review)  => {
  return dispatch => {
    dispatch(startLoadingReview());
    return ReviewAPIUtil.createReview(bookId, review).then(
      (rev) => dispatch(receiveReview(rev)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const fetchReview = (bookId, reviewId) => {
  return dispatch => {
    dispatch(startLoadingReview());
    return ReviewAPIUtil.fetchReview(bookId, reviewId).then(
      (review) => dispatch(receiveReview(review)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

// #TODO: fetchReviews?

export const updateReview = (bookId, review)=> {
  return dispatch => {
    return ReviewAPIUtil.updateReview(bookId, review).then(
      (rev) => dispatch(receiveReview(rev)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const deleteReview = (id) => {
  return dispatch => {
    return ReviewAPIUtil.deleteReview(id).then(
      (review) => dispatch(receiveReview(review)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
