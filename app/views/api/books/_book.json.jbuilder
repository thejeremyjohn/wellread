json.extract! book, :id, :title, :author, :img_url, :description, :bookshelf_memberships

# json.extract! book, :id, :title, :author, :img_url, :description, json.bookshelf_ids book.bookshelves.ids

# json.array! book.bookshelves

# json.id book.id
# json.title book.title
# json.author book.author
# json.img_url book.img_url
# json.description book.description
# json.bookshelf_ids book.bookshelves.ids
# json.bookshelves book.bookshelves

# json.array! book.bookshelf_ids do |id|
#   json.bookshelf_id id
# end
