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
    debugger
    createBookshelfMembership(book.id, { book_id: book.id, bookshelf_id: 23 });
  }

  render() {
    $('.content-outer').addClass('white-bg');
    // $('').addClass('white-bg');
    const { loading, book, errors, createBookshelfMembership } = this.props;

    if (loading) {
      return (
        <div>Loading book...</div>
      );
    }

    if (book) {
      return (
        <div className='book-show-outer'>
          <div className='book-show-inner-left'>
            <img className='book-cover'
              src={book.img_url}
              height='247.25px;'
              width='150px'
            ></img>
            <button
              onClick={() => this.addToBookshelfTwo()}
              >Add to bookshelf @ id 2
            </button>
          </div>
          <div className='book-show-inner-right'>
            <p className='book-title'>{book.title}</p>
            <p className='book-author'>by {book.author}</p>
            <p className='book-description'>{book.description}</p>
          </div>
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
