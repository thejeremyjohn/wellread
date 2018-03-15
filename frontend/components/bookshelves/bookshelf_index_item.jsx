import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BookshelfShowContainer from './bookshelf_show_container';


const BookshelfIndexItem = ({ bookshelf, userId, deleteBookshelf, pathname, requestBookshelves, clearBookshelves }) => {

  // let linkTo;
  // if (pathname.endsWith('bookshelves')) {
  //   linkTo = `bookshelves/${bookshelf.id}`;
  // } else {
  //   linkTo = `/${bookshelf.id}`;
  // }
  // debugger
  const handleDelete = (uId, bookshelfId) => {
    return (e) => {
      deleteBookshelf(uId, bookshelfId);
      clearBookshelves();
      requestBookshelves(uId);
    };
  };
  // debugger
  if (bookshelf.name) {
    return (
      <li>
        <div >
          <img
            className='delete-img'
            src='https://s.gr-assets.com/assets/layout/delete-a9a86f59648bf17079954ea50a673dbc.png'
            onClick={handleDelete(userId, bookshelf.id)}>
          </img>
          <Link to={`/users/${userId}/bookshelves/${bookshelf.id}`}>
            {bookshelf.name}&nbsp;(
              {bookshelf.book_ids ? bookshelf.book_ids.length : 0 }
            )
          </Link>
        </div>
      </li>
    );
  }
};

// <Route
//   path={`/users/:userId/bookshelves/${bookshelf.id}`}
//   component={BookshelfShowContainer}
// />


export default BookshelfIndexItem;
