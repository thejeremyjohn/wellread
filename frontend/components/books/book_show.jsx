import React from 'react';
import { requestBook } from '../../actions/book_actions';

class BookShow extends React.Component {
  componentDidMount() {
    this.props.getBook(this.props.match.params.bookId);
    // debugger
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.book.id != nextProps.match.params.bookId) {
  //     this.props.fetchPost(nextProps.match.params.bookId);
  //   }
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
    const { book } = this.props;
    if (!book) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {this.renderErrors()}
        <h3>{book.title}</h3>
        <img src={book.img_url}></img>
        <p>{book.author}</p>
        <p>{book.description}</p>
      </div>
    );
  }
}

export default BookShow;
