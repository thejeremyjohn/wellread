import React from 'react';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
    this.addToBookshelfTwo = this.addToBookshelfTwo.bind(this);
  }

  componentDidMount() {
    this.props.requestBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId != nextProps.match.params.bookId) {
      this.props.requestBook(nextProps.match.params.bookId);
    }
  }

  addToBookshelfTwo() {
    const { createBookshelfMembership, book } = this.props;
    createBookshelfMembership(book.id, { book_id: book.id, bookshelf_id: 2 });
  }

  render() {
    const { loading, book, errors, createBookshelfMembership } = this.props;

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
          <button
            onClick={() => this.addToBookshelfTwo()}
            >Add to bookshelf @ id 2
          </button>
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
