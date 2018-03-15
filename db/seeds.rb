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
  description: "\"It began as a mistake.\" By middle age, Henry Chinaski has lost more than twelve years of his life to the U.S. Postal Service. In a world where his three true, bitter pleasures are women, booze, and racetrack betting, he somehow drags his hangover out of bed every dawn to lug waterlogged mailbags up mud-soaked mountains, outsmart vicious guard dogs, and pray to survive the day-to-day trials of sadistic bosses and certifiable coworkers.\n This classic 1971 novel--the one that catapulted its author to national fame--is the perfect introduction to the grimly hysterical world of legendary writer, poet, and Dirty Old Man Charles Bukowski and his fictional alter ego, Chinaski.",
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
    description: "A rousing call to arms whose influence is still felt today, Karl Marx and Friedrich Engels\' The Communist Manifesto is edited with an introduction by Gareth Stedman-Jones in Penguin Classics.\nMarx and Engels\'s revolutionary summons to the working classes, The Communist Manifesto is one of the most important political theories ever formulated. After four years of collaboration, they produced an incisive account of their idea of Communism, in which they envisage a society without classes, private property or a state, arguing that the exploitation of industrial workers will eventually lead to a revolution in which Capitalism is overthrown. This vision provided the theoretical basis of political systems in Russia, China, Cuba and Eastern Europe, affecting the lives of millions. The Communist Manifesto still remains a landmark text: a work that continues to influence and provoke debate on capitalism and class.\nGareth Stedman Jones\'s extensive and scholarly introduction provides an unique assessment of the place of The Communist Manifesto in history, and its continuing relevance as a depiction of global capitalism. This edition reproduces Samuel Moore\'s translation of 1888 and contains a guide to further reading, notes and an index.\nKarl Marx (1818-1883) was born in Trier, Germany and studied law at Bonn and Berlin. He settled in London, where he studied economics and wrote the first volume of his major work, Das Kapital (1867, with two further volumes in 1884 and 1894). He is buried in Highgate Cemetery, London.\nFriedrich Engels (1820-1895), as well as his collaboration with Marx, was the author of The Condition of the Working Class in England (1845), based on personal observations and research.\nIf you enjoyed The Communist Manifesto, you might like Marx\'s Capital, also available in Penguin Classics.\n\'The words of the Communist Manifesto flare like the fiery writing on the wall above the crumbling bastions of capitalist society: socialism or barbarism!\'\nRosa Luxemburg",
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
