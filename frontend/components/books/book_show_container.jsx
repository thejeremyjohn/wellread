import { connect } from 'react-redux';
import { requestBook } from '../../actions/book_actions';
import BookShow from './book_show';

const msp = (state, ownProps) => {
  return {
    book: state.entities.books[ownProps.match.params.bookId],
    loading: state.ui.loading.bookShowLoading,
    errors: state.errors.book
  };
};


const mdp = (dispatch, ownProps) => {
  return {
    fetchBook: (id) => dispatch(requestBook(id))
  };
};

export default connect(msp, mdp)(BookShow);
