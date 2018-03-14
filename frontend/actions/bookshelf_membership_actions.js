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



// export const START_LOADING_BOOKSHELF_MEMBERSHIP = 'START_LOADING_BOOKSHELF_MEMBERSHIP';
//
// export const startLoadingBookshelfMembership = () => ({
//   type: START_LOADING_BOOKSHELF_MEMBERSHIP
// });

export const createBookshelfMembership = (bookshelfMembership) => {
  return dispatch => {
    // dispatch(startLoadingBookshelfMembership());
    return BookshelfMembershipAPIUtil.createBookshelfMembership(bookshelfMembership).then(
      (membership) => dispatch(receiveBookshelfMembership(membership)),
      // null,
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};


// export const updateBookshelfMembership = (bookshelfMembership) => {
//   return dispatch => {
//     return BookshelfMembershipAPIUtil.updateBookshelfMembership(bookshelfMembership).then(
//       (membership) => dispatch(receiveBookshelfMembership(membership)),
//       (err) => dispatch(receiveErrors(err.responseJSON))
//     );
//   };
// };
//
export const deleteBookshelfMembership = (id) => {
  return dispatch => {
    return BookshelfMembershipAPIUtil.deleteBookshelfMembership(id).then(
      (membership) => dispatch(receiveBookshelfMembership(membership)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
