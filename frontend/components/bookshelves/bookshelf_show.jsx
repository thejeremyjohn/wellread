import React from 'react';
import { requestBookshelf } from '../../actions/bookshelf_actions';

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

    if (bookshelf) {
      return (
        <div>
          <h3>{bookshelf.name}</h3>
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

export default BookshelfShow;
