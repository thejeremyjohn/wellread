import { connect } from 'react-redux';

import BookIndex from './book_index';
import { requestBooks } from '../../actions/book_actions';
// import { selectAllBook } from '../../reducers/selectors';

const msp = (state, ownProps) => {
  return {
    books: Object.values(state.entities.books),
    loading: state.ui.loading.bookIndexLoading
  };
};

const mdp = dispatch => ({
  requestBooks: () => dispatch(requestBooks())
});

export default connect(msp, mdp)(BookIndex);
