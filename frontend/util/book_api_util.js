export const showBook = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/books/${id}`
  });
};
