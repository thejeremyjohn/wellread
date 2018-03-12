import { connect } from 'react-redux';
import { requestBook } from '../../actions/book_actions';
import BookShow from './book_show';

const msp = (state, ownProps) => {
  debugger
  return {
    book: state.entities.books[ownProps.match.params.bookId],
    loading: state.ui.loading.books.bookShowLoading,
    errors: state.errors.book
  };
};


const mdp = (dispatch, ownProps) => {
  return {
    requestBook: (id) => dispatch(requestBook(id))
  };
};

export default connect(msp, mdp)(BookShow);
