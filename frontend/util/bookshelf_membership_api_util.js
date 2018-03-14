export const createBookshelfMembership = (bookshelf_membership) => {
  return $.ajax({
    method: 'POST',
    url: `/api/books/${bookshelf_membership.book_id}/bookshelf_memberships`,
    data: { bookshelf_membership }
  });
};

// $.ajax({
//   method: 'POST',
//   url: `/api/books/191/bookshelf_memberships`,
//   data: { bookshelf_membership: { book_id: 191, bookshelf_id: 26 } }
// });


// export const updateBookshelfMembership = (bookshelf_membership) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/books/${bookshelf_membership.book_id}/bookshelf_memberships/${bookshelf_membership.id}`,
//     data: { bookshelf_membership }
//   });
// };

// $.ajax({
//   method: 'PATCH',
//   url: `/api/books/55/bookshelf_memberships/4`,
//   data: { bookshelf_membership: { bookshelf_id: 2, book_id: 55 } }
// });


export const deleteBookshelfMembership = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookshelf_memberships/${id}`
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
