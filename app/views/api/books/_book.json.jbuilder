# json.extract! book, :id, :title, :author, :img_url, :description

# json.array! book.bookshelves
json.id book.id
json.title book.title
json.author book.author
json.img_url book.img_url
json.description book.description
json.bookshelf_ids book.bookshelves.ids
