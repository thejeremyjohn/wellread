import { connect } from 'react-redux';

import BookshelfIndex from './bookshelf_index';
import {
  requestBookshelves, deleteBookshelf
} from '../../actions/bookshelf_actions';

const msp = (state, ownProps) => {
  return {
    bookshelves: Object.values(state.entities.bookshelves),
    loading: state.ui.loading.bookshelves.bookshelfIndexLoading
  };
};

const mdp = dispatch => ({
  requestBookshelves: () => dispatch(requestBookshelves()),
  deleteBookshelf: (userId, id) => dispatch(deleteBookshelf(userId, id))
});

export default connect(msp, mdp)(BookshelfIndex);
