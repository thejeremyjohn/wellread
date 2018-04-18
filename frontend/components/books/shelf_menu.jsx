import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import {
  createBookshelfMembership, deleteBookshelfMembership
} from '../../actions/bookshelf_membership_actions';

const mdp = (dispatch) => {
  return{
    createBookshelfMembership: (shelfMembership) => (
      dispatch(createBookshelfMembership(shelfMembership))
    ),
    // deleteBookshelfMembership: (bookId, bookshelfId) => (
    //   dispatch(deleteBookshelfMembership(bookId, bookshelfId))
    // )
    deleteBookshelfMembership: (membershipId) => (
      dispatch(deleteBookshelfMembership(membershipId))
    )
  };
};

class ShelfMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // default unchecked for all of the user's bookshelves
    props.userBookshelfIds.forEach(bookshelfId => {
      this.state[bookshelfId] = false;
    });
    // checked for all of the book's bookshelves (i.e. memberships)

    const membershipByShelfId = {};
    props.book.bookshelf_memberships.forEach(membership => {
      membershipByShelfId[membership.bookshelf_id] = membership.id;
      this.state[membership.bookshelf_id] = true;
    });
    this.state['membershipByShelfId'] = membershipByShelfId;
    // debugger

    // props.book.bookshelf_ids.forEach(id => {
    //   this.state[id] = true;
    // });
    // debugger
    this.handleShelfMembership = this.handleShelfMembership.bind(this);
  }

  handleShelfMembership(bookId, shelfId) {
    return (e) => {
      const name = e.target.name;
      const isChecked = e.target.checked;
      const newState = (merge({}, this.state));
      const membership = {
        book_id: bookId,
        bookshelf_id: shelfId
      };
      if (isChecked) {
        this.props.createBookshelfMembership(membership);
      } else {
        // this.props.deleteBookshelfMembership(bookId, shelfId);
        this.props.deleteBookshelfMembership(
          this.state.membershipByShelfId[shelfId]
        );
      }
      newState[name] = isChecked;
      this.setState(newState);
    };
  }

  render() {
    // debugger
    const { shelf, book } = this.props;
    // {book.id + '-->' + shelf.id} <br/>
    return (
      <label className='shelf-menu-items-b'>
        <input
          type='checkbox'
          name={shelf.id}
          checked={this.state[shelf.id]}
          onChange={this.handleShelfMembership(book.id, shelf.id)}
        />{shelf.name}
        <br/>
      </label>
    );
  }
}

export default connect(null, mdp)(ShelfMenu);

// this.addToShelf = this.addToShelf.bind(this);

// addToShelf(bookId, shelfId) {
//   return (e) => {
//     this.props.createBookshelfMembership({
//       book_id: bookId,
//       bookshelf_id: shelfId
//     });
//   };
// }

// <button
//   className='shelf-menu-items'
//   onClick={this.addToShelf(book.id, shelf.id)}
//   >{shelf.name}
// </button>
