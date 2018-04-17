import React from 'react';
import { Route } from 'react-router-dom';

import BookIndexItem from './book_index_item';

class BookIndex extends React.Component {

  componentDidMount() {
    this.props.requestBooks();
  }

  render() {
    const { loading, books } = this.props;

    const bookIndex = books.map(book => (
      <BookIndexItem key={book.id} book={book} />
    ));

    if (loading) {
      return <div>Loading book index...</div>;
    }

    return (
      <section>
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
            {bookIndex}
          </tbody>
        </table>
      </section>
    );
  }
}

export default BookIndex;
