import React from 'react';
import { requestBookshelf } from '../../actions/bookshelf_actions';
import BookIndexItem from '../books/book_index_item';

// import { Route } from 'react-router-dom';
// import { ProtectedRoute } from '../../util/route_util';
// import BookshelfIndexContainer from './bookshelf_index_container';

class BookshelfShow extends React.Component {

  componentDidMount() {
    const { userId, bookshelfId } = this.props.match.params;
    this.props.requestBookshelf(userId, bookshelfId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookshelfId != nextProps.match.params.bookshelfId) {
      this.props.requestBookshelf(this.props.userId, nextProps.match.params.bookshelfId);
    }
  }

  render() {
    const { loading, bookshelf, errors } = this.props;
    if (loading) {
      return (
        <div>Loading bookshelf...</div>
      );
    }

    // debugger
    // const books = bookshelf.books.map((book, i) => (
    //   <div>
    //     {book.title}
    //   </div>
    // ));
    // debugger

    // <Route path='/users/:userId/bookshelves' component={BookshelfIndexContainer} />

    if (bookshelf) {
      if (bookshelf.books) {
        const books = bookshelf.books.map((book) => (
          <BookIndexItem key={book.id} book={book} />
        ));

        return (
          <div>

            <h3>{bookshelf.name}</h3>

            <table>
              <thead>
                <tr>
                  <th className='col-cover' >cover</th>
                  <th className='col-title' >title</th>
                  <th className='col-author' >author</th>
                  <th className='col-avg-rating' >avg rating</th>
                  <th className='col-rating' >rating</th>
                  <th className='col-shelves' >shelves</th>
                  <th className='col-date-read' >date read</th>
                  <th className='col-date-added' >date added</th>
                </tr>
              </thead>
              <tbody>
                {books}
              </tbody>
            </table>

          </div>
        );
      }
    }
    // {books}


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

export default BookshelfShow;
