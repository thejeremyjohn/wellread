import * as BookAPIUtil from '../util/book_api_util';

export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const START_LOADING_BOOK = 'START_LOADING_BOOK';
export const START_LOADING_BOOKS = 'START_LOADING_BOOKS';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';
export const CLEAR_BOOK_ERRORS = 'CLEAR_BOOK_ERRORS';

export const CLEAR_BOOK = 'CLEAR_BOOK';
export const clearBook = () => ({
  type: CLEAR_BOOK,
});

export const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books
});

export const startLoadingBook = () => ({
  type: START_LOADING_BOOK
});

export const startLoadingBooks = () => ({
  type: START_LOADING_BOOKS
});

const receiveErrors = (errors) => ({
  type: RECEIVE_BOOK_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_BOOK_ERRORS,
});

export const requestBook = (id) => {
  return (dispatch) => {
    dispatch(clearErrors());
    dispatch(startLoadingBook());
    return BookAPIUtil.fetchBook(id).then(
      (book) => dispatch(receiveBook(book)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const requestBooks = () => {
  return (dispatch) => {
    dispatch(startLoadingBooks());
    return BookAPIUtil.fetchBooks().then(
      (books) => {
        dispatch(receiveBooks(books));
      }
    );
  };
};
