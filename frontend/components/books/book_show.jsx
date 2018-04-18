import React from 'react';
import ShelfMenu from './shelf_menu';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleShelfMenu = this.toggleShelfMenu.bind(this);
    // document.addEventListener('mousedown', this.toggleShelfMenu);
  }

  componentDidMount() {
    this.props.requestBook(this.props.match.params.bookId);
    this.props.requestBookshelves(this.props.currentUserId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId != nextProps.match.params.bookId) {
      this.props.requestBook(nextProps.match.params.bookId);
    }
  }
  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.toggleShelfMenu);
  // }

  toggleDescriptionLen() {
    $('.book-description').toggleClass('height-inherit');
    $('.more').toggleClass('display-none');
    $('.less').toggleClass('display-none');
  }

  toggleShelfMenu(e) {
    $('.shelf-menu').toggleClass('display-none');
    // if (e.currentTarget.className === 'shelf-menu-button-container-outer') {
    //   $('.shelf-menu').toggleClass('display-none');
    // } else {
    //   $('.shelf-menu').addClass('display-none');
    // }
  }
  // () => $('.shelf-menu').toggleClass('display-none')

  render() {
    const {
      loadingBook, book,
      loadingBookshelves, bookshelves,
      errors
    } = this.props;

    if (loadingBook || loadingBookshelves) {
      return <div>Loading book...</div>;
    }

    if (book && bookshelves) {
      const userBookshelfIds = bookshelves.map(b => b.id);
      const shelfMenu = bookshelves.map(shelf => (
        <ShelfMenu
          key={shelf.id}
          book={book}
          shelf={shelf}
          userBookshelfIds={userBookshelfIds}
          />
      ));

      return (
        <div className='book-show-outer'>
          <div className='book-show-inner-left-container'>
            <div className='book-show-inner-left'>
              <img
                className='book-cover'
                src={book.img_url}
                height='247.25px;'
                width='150px'
                ></img>

              <div className='shelf-menu-container-outer'>
                <div
                  className='shelf-menu-container'>
                  <img
                    className='shelf-menu-check'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAASElEQVR42pXRywkAIAwDUJd1ATdxg24aKQQ8BKIp5Pjob%2FzWXrM6ACIApjJAFAMAeQeiu%2BQLEOmSDihiHJDxDBDkf%2BGRHsShA2nHmi8jtgEiAAAAAElFTkSuQmCC'
                    ></img>
                  <span className='shelf-menu-title'>bookshelves</span>
                </div>

                <div className='shelf-menu-button-container-outer'
                  onClick={this.toggleShelfMenu}>
                  <div className='shelf-menu-button-container'>
                    <div className='shelf-menu-button'></div>
                  </div>
                </div>
              </div>
          </div>

          <form
            className='shelf-menu display-none'>
            {shelfMenu}
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
