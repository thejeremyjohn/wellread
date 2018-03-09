import * as BookAPIUtil from '../util/book_api_util';

export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const START_LOADING_BOOKS = 'START_LOADING_BOOKS';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';


export const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_BOOK_ERRORS,
  errors
});

export const startLoadingBooks = () => ({
  type: START_LOADING_BOOKS
});

export const requestBook = (id) => {
  return (dispatch) => {
    return BookAPIUtil.fetchBook(id).then(
      (book) => {
        dispatch(receiveBook(book));
      }
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
