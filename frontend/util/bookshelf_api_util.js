export const fetchBookshelf = (userId, id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/bookshelves/${id}`
  });
};

export const fetchBookshelves = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/bookshelves`
  });
};

export const createBookshelf = (userId, bookshelf) => {
  return $.ajax({
    method: 'POST',
    url: `api/users/${userId}/bookshelves`,
    data: { bookshelf }
  });
};

export const updateBookshelf = (userId, bookshelf) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}/bookshelves/${bookshelf.id}`,
    data: { bookshelf }
  });
};

export const deleteBookshelf = (userId, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/bookshelves/${id}`
  });
};
