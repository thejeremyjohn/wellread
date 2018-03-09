@books.each do |book|
  json.set! book.id do
    json.extract! book, :id, :title, :author, :img_url, :description
  end
end
