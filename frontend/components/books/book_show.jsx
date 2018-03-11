import React from 'react';
import { requestBook } from '../../actions/book_actions';

class BookShow extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // debugger
  //   this.state.errors = this.props.errors;
  // }

  // componentWillMount() {
  //   this.props.clearErrors();
  // }
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId != nextProps.match.params.bookId) {
      this.props.fetchBook(nextProps.match.params.bookId);
    }
  }
  // componentWillUpdate(nextProps, nextState) {
  //   if (this.state.errors.book[0] !== nextState.errors.book[0]) {
  //     debugger
  //   }
  // }
  // componentWillUnmount () {
  //   debugger
  // }

  renderErrors() {
    return(
      <ul className='errors-list'>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { loading, book, errors } = this.props;

    if (loading) {
      return (
        <div className='book-show-loading'>
          Loading book...
          {this.renderErrors()}
        </div>
      );
    }

    if (book) {
      return (
        <div>
          <h3>{book.title}</h3>
          <img src={book.img_url}></img>
          <p>{book.author}</p>
          <p>{book.description}</p>
        </div>
      );
    }

    if (errors) {
      return (
        <div>
          {this.renderErrors()}
        </div>
      );
    }
  }
}

export default BookShow;
