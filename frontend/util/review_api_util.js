export const fetchReview = (bookId, reviewId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/books/${bookId}/reviews/${reviewId}`
  });
};

export const fetchReviews = (bookId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/books/${bookId}/reviews/`
  });
};

export const createReview = (bookId, review) => {
  return $.ajax({
    method: 'POST',
    url: `/api/books/${bookId}/reviews`,
    data: { review }
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  });
};
