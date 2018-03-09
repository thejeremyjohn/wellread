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
        <ul>
          <h1>{books}</h1>
        </ul>
      </section>
    );
  }
}

export default BookIndex;
