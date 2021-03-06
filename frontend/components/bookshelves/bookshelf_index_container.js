import { connect } from 'react-redux';

import BookshelfIndex from './bookshelf_index';
import {
  requestBookshelves, deleteBookshelf, createBookshelf, clearBookshelves
} from '../../actions/bookshelf_actions';

const msp = (state, ownProps) => {
  // debugger
  return {
    bookshelves: Object.values(state.entities.bookshelves),
    loading: state.ui.loading.bookshelves.bookshelfIndexLoading
  };
};

const mdp = dispatch => ({
  requestBookshelves: (userId) => dispatch(requestBookshelves(userId)),
  deleteBookshelf: (userId, id) => dispatch(deleteBookshelf(userId, id)),
  createBookshelf: (userId, bookshelf) => dispatch(createBookshelf(userId, bookshelf)),
  clearBookshelves: () => dispatch(clearBookshelves())
});

export default connect(msp, mdp)(BookshelfIndex);
