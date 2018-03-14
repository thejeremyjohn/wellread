import React from 'react';
import { connect } from 'react-redux';
import {
  createBookshelfMembership
} from '../../actions/bookshelf_membership_actions';

const mdp = (dispatch) => {
  return{
    createBookshelfMembership: (shelfMembership) => (
      dispatch(createBookshelfMembership(shelfMembership))
    )
  };
};

// NEED to eliminate redundancies
// in the bookshelf membership actions
class ShelfMenu extends React.Component {
  constructor(props) {
    super(props);
    this.addToShelf = this.addToShelf.bind(this);
  }
  addToShelf(bookId, shelfId) {
    return (e) => {
      this.props.createBookshelfMembership({
        book_id: bookId,
        bookshelf_id: shelfId
      });
    };
  }
  render() {
    const { shelf, book } = this.props;
    // {book.id + '-->' + shelf.id}
    // <br/>
    return (
      <li>
        <button
          className='shelf-menu-items'
          onClick={this.addToShelf(book.id, shelf.id)}
          >{shelf.name}
        </button>
      </li>
    );
  }
}

export default connect(null, mdp)(ShelfMenu);

// const ShelfMenu = ({ shelf, book }) => {
//   return (
//     <ul>
//       <li>
//
//         <button
//           className='shelf-menu-items'
//           onClick={addToShelf({
//             book_id: book.id,
//             bookshelf_id: shelf.id
//           })}
//           >{shelf.name}
//         </button>
//
//       </li>
//     </ul>
//   );
// };

// export default ShelfMenu;
