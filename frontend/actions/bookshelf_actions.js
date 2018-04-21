import * as BookshelfAPIUtil from '../util/bookshelf_api_util';

export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const START_LOADING_BOOKSHELF = 'START_LOADING_BOOKSHELF';
export const START_LOADING_BOOKSHELVES = 'START_LOADING_BOOKSHELVES';
export const RECEIVE_BOOKSHELF_ERRORS = 'RECEIVE_BOOKSHELF_ERRORS';
export const CLEAR_BOOKSHELF_ERRORS = 'CLEAR_BOOKSHELF_ERRORS';

export const REMOVE_BOOKSHELF = 'REMOVE_BOOKSHELF';
export const removeBookshelf = (bookshelf) => ({
  type: REMOVE_BOOKSHELF,
  bookshelf
});

export const CLEAR_BOOKSHELVES = 'CLEAR_BOOKSHELVES';
export const clearBookshelves = () => ({
  type: CLEAR_BOOKSHELVES,
});



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

export const requestBookshelves = (userId) => {
  return (dispatch) => {
    dispatch(startLoadingBookshelves());
    return BookshelfAPIUtil.fetchBookshelves(userId).then(
      (bookshelves) => dispatch(receiveBookshelves(bookshelves))
      // ,(err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const createBookshelf = (userId, bookshelf) => {
  return dispatch => {
    return BookshelfAPIUtil.createBookshelf(userId, bookshelf).then(
      (resBookshelf) => dispatch(receiveBookshelf(resBookshelf)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const updateBookshelf = (userId, bookshelf) => {
  return dispatch => {
    return BookshelfAPIUtil.updateBookshelf(userId, bookshelf).then(
      (resBookshelf) => dispatch(receiveBookshelf(resBookshelf)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const deleteBookshelf = (userId, id) => {
  return dispatch => {
    return BookshelfAPIUtil.deleteBookshelf(userId, id).then(
      (bookshelf) => dispatch(removeBookshelf(bookshelf)),
      // null,

      // {
      //   // dispatch(receiveBookshelf(bookshelf));
      //   dispatch(clearBookshelves()); // experiment
      // },
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
