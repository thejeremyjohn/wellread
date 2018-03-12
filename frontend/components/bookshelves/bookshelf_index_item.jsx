// remove book-specific everything
// Link tos need to change and have access to userId from props

import React from 'react';
import { Link } from 'react-router-dom';



const BookshelfIndexItem = ({ bookshelf, userId, deleteBookshelf }) => {
  return (
    <li>
      <button
        onClick={(uId, bookshelfId) => deleteBookshelf(userId, bookshelf.id)}
        >DELETE
      </button>
      <Link to={`bookshelves/${bookshelf.id}`}>
        {bookshelf.name}
      </Link>
    </li>
  );
};

export default BookshelfIndexItem;
