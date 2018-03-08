import * as BookAPIUtil from '../util/book_api_util';

export const RECEIVE_BOOK = 'RECEIVE_BOOK';
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

export const showBook = (id) => {
  // debugger
  return (dispatch) => {
    return BookAPIUtil.showBook(id).then(
      (book) => dispatch(receiveBook(book)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
