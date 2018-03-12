import * as BookshelfMembershipAPIUtil from '../util/bookshelf_membership_api_util';

export const RECEIVE_BOOKSHELF_MEMBERSHIP = 'RECEIVE_BOOKSHELF_MEMBERSHIP';
export const RECEIVE_BOOKSHELF_MEMBERSHIPS = 'RECEIVE_BOOKSHELF_MEMBERSHIPS';
export const RECEIVE_BOOKSHELF_MEMBERSHIP_ERRORS = 'RECEIVE_BOOKSHELF_MEMBERSHIP_ERRORS';
export const CLEAR_BOOKSHELF_MEMBERSHIP_ERRORS = 'CLEAR_BOOKSHELF_MEMBERSHIP_ERRORS';


export const receiveBookshelfMembership = (bookshelfMembership) => ({
  type: RECEIVE_BOOKSHELF_MEMBERSHIP,
  bookshelfMembership
});

export const receiveBookshelfMemberships = (bookshelfMemberships) => ({
  type: RECEIVE_BOOKSHELF_MEMBERSHIPS,
  bookshelfMemberships
});

const receiveErrors = (errors) => ({
  type: RECEIVE_BOOKSHELF_MEMBERSHIP_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_BOOKSHELF_MEMBERSHIP_ERRORS,
});


export const createBookshelfMembership = (bookId, bookshelfMembership) => {
  return dispatch => {
    return BookshelfMembershipAPIUtil.createBookshelfMembership(bookId, bookshelfMembership).then(
      null,
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const updateBookshelfMembership = (bookId, bookshelfMembership) => {
  return dispatch => {
    return BookshelfMembershipAPIUtil.updateBookshelfMembership(bookId, bookshelfMembership).then(
      null,
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const deleteBookshelfMembership = (bookId, id) => {
  return dispatch => {
    return BookshelfMembershipAPIUtil.deleteBookshelfMembership(bookId, id).then(
      null,
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
