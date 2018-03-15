import { connect } from 'react-redux';
import { requestBookshelf } from '../../actions/bookshelf_actions';
import BookshelfShow from './bookshelf_show';

const msp = (state, ownProps) => {
  return {
    bookshelf: state.entities.bookshelves[ownProps.match.params.bookshelfId],
    loading: state.ui.loading.bookshelves.bookshelfShowLoading,
    errors: state.errors.bookshelf,
    // bookshelves: state.entities.bookshelves,
    // location: ownProps.location.pathname
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    requestBookshelf: (userId, id) => dispatch(requestBookshelf(userId, id))
  };
};

export default connect(msp, mdp)(BookshelfShow);
