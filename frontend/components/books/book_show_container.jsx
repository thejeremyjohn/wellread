import { connect } from 'react-redux';
import { requestBook } from '../../actions/book_actions';
// import {
//   createBookshelfMembership,
//   updateBookshelfMembership,
//   deleteBookshelfMembership
// } from '../../actions/bookshelf_membership_actions';
import BookShow from './book_show';

const msp = (state, ownProps) => {
  return {
    book: state.entities.books[ownProps.match.params.bookId],
    bookshelves: state.session.currentUser.bookshelves,
    loading: state.ui.loading.books.bookShowLoading,
    errors: state.errors.book,
    memberships: state.entities.memberships
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    requestBook: (id) => dispatch(requestBook(id)),
    // createBookshelfMembership: (bookId, bookshelfMembership) => (
    //   dispatch(createBookshelfMembership(bookId, bookshelfMembership))
    // ),
    // updateBookshelfMembership: (bookId, bookshelfMembership) => (
    //   dispatch(updateBookshelfMembership(bookId, bookshelfMembership))
    // ),
    // deleteBookshelfMembership: (bookId, id) => (
    //   dispatch(deleteBookshelfMembership(bookId, id))
    // )
  };
};

export default connect(msp, mdp)(BookShow);
