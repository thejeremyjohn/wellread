import React from 'react';
import { Route } from 'react-router-dom';

import BookshelfIndexItem from './bookshelf_index_item';
import BookshelfShowContainer from './bookshelf_show_container';

class BookshelfIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = { shelfName: '' };
  }

  componentDidMount() {
    this.props.requestBookshelves(this.props.match.params.userId);
  }

  updateShelfName(e) {
    this.setState({ shelfName: e.target.value });
  }

  handleCreate(userId, name) {
    return (e) => {
      this.props.createBookshelf(
        userId, { user_id: userId, name: name }
      );
      this.setState({ shelfName: '' });
    };
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <div>Loading bookshelf index...</div>;
    }

    let bookshelves = this.props.bookshelves.map(bookshelf => (
      <BookshelfIndexItem
        key={bookshelf.id}
        bookshelf={bookshelf}
        userId={this.props.match.params.userId}
        deleteBookshelf={this.props.deleteBookshelf}
        requestBookshelves={this.props.requestBookshelves}
        clearBookshelves={this.props.clearBookshelves}
        pathname={this.props.history.location.pathname}
      />
    ));
    bookshelves = bookshelves.length>0 ? bookshelves : <p>NO BOOKSHELVES</p>

    return (
      <ul className='bookshelf-index'>
        <h3 className='bookshelf-index-header'>Bookshelves</h3>
        {bookshelves}
        <form onSubmit={this.handleCreate(this.props.match.params.userId, this.state.shelfName)}>
          <input className='add-shelf-text' type="text"
            value={this.state.shelfName}
            onChange={this.updateShelfName.bind(this)}
            />
          <input type='submit' value='add' />
        </form>
      </ul>
    );
  }
}

export default BookshelfIndex;
