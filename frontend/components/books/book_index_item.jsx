import React from 'react';
import { Link } from 'react-router-dom';

const BookIndexItem = ({ book }) => (
  <tr>
    <td className='col-cover'>
      <Link to={`/books/${book.id}`}>
        <img
          src={book.img_url}
          height='81.5156px;'
          width='50px'
        />
      </Link>
    </td>
    <td className='col-title'>
      <Link to={`/books/${book.id}`}>{book.title}</Link>
    </td>
    <td className='col-author'>{book.author}</td>
    <td className='col-avg-rating not-implemented'>5.00</td>
    <td className='col-rating not-implemented'>5 stars</td>
    <td className='col-shelves not-implemented'>read</td>
    <td className='col-date-read not-implemented'>Nov 27, 2017</td>
    <td className='col-date-added not-implemented'>Nov 27, 2017</td>
  </tr>
);

export default BookIndexItem;
