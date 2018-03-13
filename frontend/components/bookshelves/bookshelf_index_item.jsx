import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BookshelfShowContainer from './bookshelf_show_container';


const BookshelfIndexItem = ({ bookshelf, userId, deleteBookshelf, pathname }) => {

  // let linkTo;
  // if (pathname.endsWith('bookshelves')) {
  //   linkTo = `bookshelves/${bookshelf.id}`;
  // } else {
  //   linkTo = `/${bookshelf.id}`;
  // }
  // debugger

  return (
    <li>
      <Link to={`/users/${userId}/bookshelves/${bookshelf.id}`}>
        {bookshelf.name}&nbsp;({bookshelf.book_ids.length})
      </Link>
    </li>
  );
};

// <Route
//   path={`/users/:userId/bookshelves/${bookshelf.id}`}
//   component={BookshelfShowContainer}
// />

// <button
//   onClick={(uId, bookshelfId) => deleteBookshelf(userId, bookshelf.id)}
//   >DELETE
// </button>

export default BookshelfIndexItem;
