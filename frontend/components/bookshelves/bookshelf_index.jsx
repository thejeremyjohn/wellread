import React from 'react';
import { Route } from 'react-router-dom';

import BookshelfIndexItem from './bookshelf_index_item';

class BookshelfIndex extends React.Component {

  componentDidMount() {
    this.props.requestBookshelves(this.props.match.params.userId);
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <div>Loading bookshelf index...</div>;
    }

    const bookshelves = this.props.bookshelves.map(bookshelf => (
      <BookshelfIndexItem
        key={bookshelf.id}
        bookshelf={bookshelf}
        userId={this.props.match.params.userId}
        deleteBookshelf={this.props.deleteBookshelf}
        pathname={this.props.history.location.pathname}
      />
    ));

    if (bookshelves.length===0) return (
      <ul className='errors-list'><li>NO BOOKSHELVES</li></ul>
    );

    return (
      <ul className='bookshelf-index'>
        <h3 className='bookshelf-index-header'>Bookshelves</h3>
        {bookshelves}
      </ul>
    );
  }
}

export default BookshelfIndex;
