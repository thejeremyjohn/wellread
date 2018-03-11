import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BookIndexItem from './book_index_item';

class BookIndex extends Component {

  componentDidMount() {
    this.props.requestBooks();
  }

  render() {
    const books = this.props.books.map(book => (
      <BookIndexItem key={book.id} book={book} />
    ));

    const { loading } = this.props;
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
            {books}
          </tbody>
        </table>
      </section>
    );
  }
}

export default BookIndex;
