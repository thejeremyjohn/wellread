import React from 'react';
import { requestBook } from '../../actions/book_actions';

class BookShow extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId != nextProps.match.params.bookId) {
      this.props.fetchBook(nextProps.match.params.bookId);
    }
  }

  render() {
    const { loading, book, errors } = this.props;

    if (loading) {
      return (
        <div>Loading book...</div>
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
      return(
        <ul className='errors-list'>
          {this.props.errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      );
    }
  }

}

export default BookShow;
