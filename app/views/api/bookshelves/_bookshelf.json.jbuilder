# json.extract! bookshelf, :id, :name, :user_id

json.id bookshelf.id
json.name bookshelf.name
json.user_id bookshelf.user_id
json.book_ids bookshelf.books.ids
