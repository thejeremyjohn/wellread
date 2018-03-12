import * as BookshelfAPIUtil from '../util/bookshelf_api_util';

export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const START_LOADING_BOOKSHELF = 'START_LOADING_BOOKSHELF';
export const START_LOADING_BOOKSHELVES = 'START_LOADING_BOOKSHELVES';
export const RECEIVE_BOOKSHELF_ERRORS = 'RECEIVE_BOOKSHELF_ERRORS';
export const CLEAR_BOOKSHELF_ERRORS = 'CLEAR_BOOKSHELF_ERRORS';


export const receiveBookshelf = (bookshelf) => ({
  type: RECEIVE_BOOKSHELF,
  bookshelf
});

export const receiveBookshelves = (bookshelves) => ({
  type: RECEIVE_BOOKSHELVES,
  bookshelves
});

export const startLoadingBookshelf = () => ({
  type: START_LOADING_BOOKSHELF
});

export const startLoadingBookshelves = () => ({
  type: START_LOADING_BOOKSHELVES
});

const receiveErrors = (errors) => ({
  type: RECEIVE_BOOKSHELF_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_BOOKSHELF_ERRORS,
});

export const requestBookshelf = (userId, id) => {
  return (dispatch) => {
    // dispatch(clearErrors());
    dispatch(startLoadingBookshelf());
    return BookshelfAPIUtil.fetchBookshelf(userId, id).then(
      (bookshelf) => dispatch(receiveBookshelf(bookshelf)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const requestBookshelves = () => {
  return (dispatch) => {
    dispatch(startLoadingBookshelves());
    return BookshelfAPIUtil.fetchBookshelves().then(
      (bookshelves) => {
        dispatch(receiveBookshelves(bookshelves));
      }
    );
  };
};

export const createBookshelf = (userId, bookshelf) => {
  return dispatch => {
    return BookshelfAPIUtil.createBookshelf(userId, bookshelf).then(
      (resBookshelf) => dispatch(receiveBookshelf(bookshelf)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const updateBookshelf = (userId, bookshelf) => {
  return dispatch => {
    return BookshelfAPIUtil.updateBookshelf(userId, bookshelf).then(
      (resBookshelf) => dispatch(receiveBookshelf(bookshelf)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const deleteBookshelf = (userId, id) => {
  return dispatch => {
    return BookshelfAPIUtil.deleteBookshelf(userId, id).then(
      (bookshelves) => dispatch(receiveBookshelf(bookshelves)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
