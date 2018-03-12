import React from 'react';
import { Route } from 'react-router-dom';

import BookshelfIndexItem from './bookshelf_index_item';

class BookshelfIndex extends React.Component {

  componentDidMount() {
    this.props.requestBookshelves();
  }

  render() {
    const bookshelves = this.props.bookshelves.map(bookshelf => (
      <BookshelfIndexItem
        key={bookshelf.id}
        bookshelf={bookshelf}
        userId={this.props.match.params.userId}
        deleteBookshelf={this.props.deleteBookshelf}
      />
    ));

    const { loading } = this.props;
    if (loading) {
      return <div>Loading bookshelf index...</div>;
    }

    return (
      <ul>
        {bookshelves}
      </ul>
    );
  }
}

export default BookshelfIndex;
