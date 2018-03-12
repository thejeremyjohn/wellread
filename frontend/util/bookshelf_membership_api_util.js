export const createBookshelfMembership = (bookId, bookshelf_membership) => {
  return $.ajax({
    method: 'POST',
    url: `/api/books/${bookId}/bookshelf_memberships`,
    data: { bookshelf_membership }
  });
};

// $.ajax({
//   method: 'POST',
//   url: `/api/books/56/bookshelf_memberships`,
//   data: { bookshelf_membership: { bookshelf_id: 2, book_id: 56 } }
// });


export const updateBookshelfMembership = (bookId, bookshelf_membership) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/books/${bookId}/bookshelf_memberships/${bookshelf_membership.id}`,
    data: { bookshelf_membership }
  });
};

// $.ajax({
//   method: 'PATCH',
//   url: `/api/books/55/bookshelf_memberships/4`,
//   data: { bookshelf_membership: { bookshelf_id: 2, book_id: 55 } }
// });


export const deleteBookshelfMembership = (bookId, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/books/${bookId}/bookshelf_memberships/${id}`
  });
};

// $.ajax({
//   method: 'DELETE',
//   url: `/api/books/55/bookshelf_memberships/5`
// });


// export const getBookshelfMembership = (id) => {
//   return $.ajax({
//     method: 'GET',
//     url: `api/bookshelf_memberships/${id}`,
//   });
// };
//
// $.ajax({
//   method: 'GET',
//   url: `api/bookshelf_memberships/1`,
// });
