import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import {
  clearBookshelfMemberships,
  fetchBookshelfMemberships,
  createBookshelfMembership,
  deleteBookshelfMembership
} from '../../actions/bookshelf_membership_actions';
import { clearBookshelves } from '../../actions/bookshelf_actions';


const mdp = (dispatch) => {
  return{
    clearBookshelfMemberships: () => dispatch(clearBookshelfMemberships()),

    fetchBookshelfMemberships: (bookId) => (
      dispatch(fetchBookshelfMemberships(bookId))
    ),
    createBookshelfMembership: (shelfMembership) => (
      dispatch(createBookshelfMembership(shelfMembership))
    ),
    // deleteBookshelfMembership: (bookId, bookshelfId) => (
    //   dispatch(deleteBookshelfMembership(bookId, bookshelfId))
    // )
    deleteBookshelfMembership: (membershipId) => (
      dispatch(deleteBookshelfMembership(membershipId))
    ),
    clearBookshelves: () => dispatch(clearBookshelves())
  };
};

class ShelfMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.handleShelfMembership = this.handleShelfMembership.bind(this);
  }

  componentWillMount() {
    console.log('shelfMenu mounted');
    // this.props.fetchBookshelfMemberships(this.props.book.id);
  }

  componentWillUnmount() {
    console.log('shelfMenu unmounted');
    this.props.clearBookshelves();
    this.props.clearBookshelfMemberships();
  }

  handleShelfMembership(bookId, shelfId) {
    // console.log('this happened');
    return (e) => {
      const name = e.target.name;
      const isChecked = e.target.checked;
      const newState = (merge({}, this.state));
      const membership = {
        book_id: bookId,
        bookshelf_id: shelfId
      };
      if (isChecked) {
        this.props.createBookshelfMembership(membership).then(
          () => {
            // console.log('receivedMemberships below');
            // console.log(this.props.memberships);
            this.props.memberships.forEach(receivedMembership => {
              newState.membershipByShelfId[receivedMembership.bookshelf_id] = receivedMembership.id;
              newState[receivedMembership.bookshelf_id] = true;
            });
            // console.log('CREATEd bookshelfMembership');

          }
        );


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
    // const { shelf, book } = this.props;
    const { shelves, book } = this.props;
    // {book.id + '-->' + shelf.id} <br/>
    // return (
    //   <label className='shelf-menu-items-b'>
    //     <input
    //       type='checkbox'
    //       name={shelf.id}
    //       checked={this.state[shelf.id]}
    //       onChange={this.handleShelfMembership(book.id, shelf.id)}
    //     />{shelf.name}
    //     <br/>
    //   </label>
    // );
    return shelves.map(shelf => (
      <label className='shelf-menu-items-b' key={shelf.id}>
        <input
          type='checkbox'
          name={shelf.id}
          checked={this.state[shelf.id]}
          onChange={this.handleShelfMembership(book.id, shelf.id)}
        />{shelf.name}
        <br/>
      </label>
    ));
  }
}

export default connect(null, mdp)(ShelfMenu);

// const ShelfMenuItem = ({ shelves }) => (
// );
