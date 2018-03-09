import React from 'react';
import { Link } from 'react-router-dom';

const BookIndexItem = ({ book }) => (
  <li>
    <Link to={`/books/${book.id}`}>
      <img src={book.img_url} alt={book.title} />
      <span>{book.title}</span>
      <span>{book.author}</span>
    </Link>
  </li>
);

export default BookIndexItem;
