import React from 'react';
import ShelfMenu from './shelf_menu';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBook(this.props.match.params.bookId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId != nextProps.match.params.bookId) {
      this.props.requestBook(nextProps.match.params.bookId);
    }
  }

  toggleDescriptionLen() {
    $('.book-description').toggleClass('height-inherit');
    $('.more').toggleClass('display-none');
    $('.less').toggleClass('display-none');
  }

  render() {
    const { loading, book, errors } = this.props;

    if (loading) {
      return <div>Loading book...</div>;
    }

    const bookshelves = this.props.bookshelves.map(shelf => (
      <ShelfMenu
        key={shelf.id}
        book={book}
        shelf={shelf}
        userBookshelfIds={this.props.bookshelves.map(b => b.id)}
      />
    ));

    if (book) {
      // debugger
      // const memberships = this.props.memberships.map(membership => (
      //   membership.id
      // )).join(' ');

      // <p>{book.bookshelf_ids.join(' ')}</p>
      return (
        <div className='book-show-outer'>
          <div className='book-show-inner-left'>
            <img className='book-cover'
              src={book.img_url}
              height='247.25px;'
              width='150px'
            ></img>
          <h3>current shelf memberships:</h3>
            <form
              className='shelf-menu'>
              {bookshelves}
            </form>
          </div>
          <div className='book-show-inner-right'>
            <p className='book-title'>{book.title}</p>
            <p className='book-author'>by {book.author}</p>
            <p className='book-description'>{book.description}</p>
            <p
              className='more'
              onClick={this.toggleDescriptionLen.bind(this)}
              >MORE
            </p>
            <p
              className='less display-none'
              onClick={this.toggleDescriptionLen.bind(this)}
              >LESS
            </p>
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
