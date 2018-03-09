import { connect } from 'react-redux';
import { requestBook } from '../../actions/book_actions';
import BookShow from './book_show';

const msp = (state, ownProps) => {
  return {
    book: state.entities.books[ownProps.match.params.bookId]
  };
};


const mdp = (dispatch, ownProps) => {
  return {
    getBook: (id) => dispatch(requestBook(id))
  };
};

export default connect(msp, mdp)(BookShow);
