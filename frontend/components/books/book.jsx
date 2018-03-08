import React from 'react';
import { connect } from 'react-redux';
import { showBook } from '../../actions/book_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  // debugger
  return {
    book: state.book
  };
};
// const msp = (state, ownProps) => {
//   return {
//     book: state.events[ownProps.match.params.eventId]
//   };
// };


const mdp = (dispatch) => {
  return {
    showBook: (id) => dispatch(showBook(id))
  };
};

class Book extends React.Component {
  render() {
    return (
      <div>
        {this.props.book.title}
        {this.props.book.author}
      </div>
    );
  }
}

export default withRouter(connect(msp, mdp)(Book));
