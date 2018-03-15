# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Book.destroy_all
Bookshelf.destroy_all
BookshelfMembership.destroy_all

User.create(username: 'demo', password: 'password')

Book.create(
  title: 'Post Office',
  author: 'Charles Bukowski',
  description: 'The first and perhaps most underappreciated novel by Charles Bukowski...',
  img_url: 'https://images.gr-assets.com/books/1424999238l/51504.jpg'
 )

Book.create(
  title: 'Communist Manifesto',
  author: 'Karl Marx',
  description: 'An aptly named book by an esteemed German politico-philosopher...',
  img_url: 'https://images.gr-assets.com/books/1420003664l/30474.jpg'
 )

48.times do |i|
  book = Faker::Book
  description = []
    3.times { |i| description.push Faker::Lorem.paragraph(sentence_count=9) }
    description = description.join("\n\n")
  Book.create(
    title: book.title,
    author: book.author,
    description: description,
    img_url: 'https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg'
  )
end
# img_url: 'http://s2.quickmeme.com/img/34/347d80261f3d0cbcc382ed45c68a0bc5910e3c04280ae116f2e02d29e2bef5fc.jpg'

User.ids.each do |user_id|
  Bookshelf.create(user_id: user_id, name: 'read')
  Bookshelf.create(user_id: user_id, name: 'currently reading')
  Bookshelf.create(user_id: user_id, name: 'want to read')
  2.times do |i|
    Bookshelf.create(user_id: user_id, name: Faker::StarTrek.specie)
  end
end

book_ids = Book.ids
Bookshelf.ids.each do |bookshelf_id|
  book_ids.shuffle.sample(rand(book_ids.length)).each do |book_id|
    BookshelfMembership.create(book_id: book_id, bookshelf_id: bookshelf_id)
  end
end
