@bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    # json.extract! bookshelf, :id, :name, :user_id
    json.partial! 'api/bookshelves/bookshelf', bookshelf: bookshelf
  end
end
