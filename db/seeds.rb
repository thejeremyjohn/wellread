# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Book.destroy_all

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
