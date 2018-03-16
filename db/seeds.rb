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
  title: 'Animal Farm',
  author: 'George Orwell',
  description: "As ferociously fresh as it was more than a half century ago, this remarkable allegory of a downtrodden society of overworked, mistreated animals, and their quest to create a paradise of progress, justice, and equality is one of the most scathing satires ever published. As we witness the rise and bloody fall of the revolutionary animals, we begin to recognize the seeds of totalitarianism in the most idealistic organization; and in our most charismatic leaders, the souls of our cruelest oppressors.",
  img_url: 'https://images.gr-assets.com/books/1424037542l/7613.jpg'
)

Book.create(
  title: 'American Psycho',
  author: 'Bret Easton Ellis',
  description: "Patrick Bateman is twenty-six and he works on Wall Street, he is handsome, sophisticated, charming and intelligent. He is also a psychopath. Taking us to head-on collision with America's greatest dream—and its worst nightmare—American Psycho is bleak, bitter, black comedy about a world we all recognise but do not wish to confront.",
  img_url: 'https://images.gr-assets.com/books/1436934349l/28676.jpg'
 )

Book.create(
  title: 'A Clockwork Orange',
  author: 'Anthony Burgess',
  description: "A vicious fifteen-year-old \"droog\" is the central character of this 1963 classic, whose stark terror was captured in Stanley Kubrick's magnificent film of the same title.\n\nIn Anthony Burgess's nightmare vision of the future, where criminals take over after dark, the story is told by the central character, Alex, who talks in a brutal invented slang that brilliantly renders his and his friends' social pathology. A Clockwork Orange is a frightening fable about good and evil, and the meaning of human freedom. When the state undertakes to reform Alex—to \"redeem\" him—the novel asks, \"At what cost?\"\n\nThis edition includes the controversial last chapter not published in the first edition and Burgess's introduction \"A Clockwork Orange Resucked\".",
  img_url: 'https://images.gr-assets.com/books/1348339306l/227463.jpg'
)

Book.create(
  title: 'Speaker for the Dead',
  author: 'Orson Scott Card',
  description: "In the aftermath of his terrible war, Ender Wiggin disappeared, and a powerful voice arose: the Speaker for the Dead, who told of the true story of the Bugger War.\n\nNow long years later, a second alien race has been discovered, but again the aliens’ ways are strange and frightening…again, humans die. And it is only the Speaker for the Dead, who is also Ender Wiggin the Xenocide, who has the courage to confront the mystery…and the truth. \n",
  img_url: 'https://images.gr-assets.com/books/1295660894l/7967.jpg'
)

Book.create(
  title: 'The Metamorphosis',
  author: 'Franz Kafka',
  description: '\"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.\"\n\nWith this startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing -- though absurdly comic -- meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosis has taken its place as one of the most widely read and influential works of twentieth-century fiction. As W.H. Auden wrote, \"Kafka is important to us because his predicament is the predicament of modern man.\"',
  img_url: 'https://images.gr-assets.com/books/1359061917l/485894.jpg'
)

Book.create(
  title: 'The Metamorphosis of Prime Intellect',
  author: ' Roger Williams',
  description: 'In a time not far from our own, Lawrence sets out simply to build an artifical intelligence that can pass as human, and finds himself instead with one that can pass as a god. Taking the Three Laws of Robotics literally, Prime Intellect makes every human immortal and provides instantly for every stated human desire. Caroline finds no meaning in this life of purposeless ease, and forgets her emptiness only in moments of violent and profane exhibitionism. At turns shocking and humorous, Prime Intellect looks unflinchingly at extremes of human behavior that might emerge when all limits are removed.',
  img_url: 'https://images.gr-assets.com/books/1347689279l/64341.jpg'
)

Book.create(
  title: 'Ready Player One',
  author: 'Ernest Cline',
  description: 'In the year 2045, reality is an ugly place. The only time teenage Wade Watts really feels alive is when he\'s jacked into the virtual utopia known as the OASIS. Wade\'s devoted his life to studying the puzzles hidden within this world\'s digital confines, puzzles that are based on their creator\'s obsession with the pop culture of decades past and that promise massive power and fortune to whoever can unlock them. When Wade stumbles upon the first clue, he finds himself beset by players willing to kill to take this ultimate prize. The race is on, and if Wade\'s going to survive, he\'ll have to win—and confront the real world he\'s always been so desperate to escape.',
  img_url: 'https://images.gr-assets.com/books/1500930947l/9969571.jpg'
)

Book.create(
  title: 'Ender\'s Game',
  author: 'Orson Scott Card',
  description: 'Ender\'s Game is a 1985 military science fiction novel by American author Orson Scott Card. Set in Earth\'s future, the novel presents an imperiled mankind after two conflicts with the \"buggers\", an insectoid alien species. In preparation for an anticipated third invasion, children, including the novel\'s protagonist, Ender Wiggin, are trained from a very young age through increasingly difficult games including some in zero gravity, where Ender\'s tactical genius is revealed.',
  img_url: 'https://images.gr-assets.com/books/1408303130l/375802.jpg'
)

Book.create(
  title: 'South of No North',
  author: 'Charles Bukowski',
  description: 'South of No North contains some of Bukowski\'s best work. Among the short stories collected in the book are Love for $17.50, about a man named Robert whose infatuation with a mannequin in a junk shop leads him first to buy it, then make love to it, and then eventually fall in love with \"her,\" much to the consternation of his real-life girlfriend; Maja Thurup, about a South American tribesman with an enormous penis who is brought to Los Angeles by the woman anthropologist who has \"discovered\" him and become his lover; and The Devil is Hot, about an encounter with Old Nick at an amusement pier in Santa Monica, where Scratch himself is caged and on display, fed only peanut butter and dogfood, exploited by a cynical carnie.\n\nThe collection also features two of Bukowski\'s finest and most famous short stories: All the Assholes in the World Plus Mine, an autobiographical rumination on the treatment of his hemorrhoids, and Confessions of a Man Insane Enough to Live With Beasts. (The latter story originally was published as a chapbook of 500 copies by Bensenville Mimeo Press in 1965.)\n\nThe short stories collected in the volume are evocative of Bukowski at his best, when he was one of the premier short story writers still at the top of his talent.\n- Wikipedia',
  img_url: 'https://images.gr-assets.com/books/1435198449l/220680.jpg'
)

Book.create(
  title: '1984',
  author: 'George Orwell',
  description: 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmare vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life--the ubiquity of television, the distortion of the language--and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.',
  img_url: 'https://images.gr-assets.com/books/1348990566l/5470.jpg'
)

Book.create(
  title: 'Lord of the Flies ',
  author: ' William Golding ',
  description: 'The book focuses on a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves.',
  img_url: 'https://images.gr-assets.com/books/1327869409l/7624.jpg'
)

Book.create(
  title: 'Angela\'s Ashes',
  author: ' Frank McCourt ',
  description: 'Imbued on every page with Frank McCourt\'s astounding humor and compassion. This is a glorious book that bears all the marks of a classic.\n\n\"When I look back on my childhood I wonder how I managed to survive at all. It was, of course, a miserable childhood: the happy childhood is hardly worth your while. Worse than the ordinary miserable childhood is the miserable Irish childhood, and worse yet is the miserable Irish Catholic childhood.\"\n\nSo begins the Pulitzer Prize winning memoir of Frank McCourt, born in Depression-era Brooklyn to recent Irish immigrants and raised in the slums of Limerick, Ireland. Frank\'s mother, Angela, has no money to feed the children since Frank\'s father, Malachy, rarely works, and when he does he drinks his wages. Yet Malachy-- exasperating, irresponsible and beguiling-- does nurture in Frank an appetite for the one thing he can provide: a story. Frank lives for his father\'s tales of Cuchulain, who saved Ireland, and of the Angel on the Seventh Step, who brings his mother babies.\n\nPerhaps it is story that accounts for Frank\'s survival. Wearing rags for diapers, begging a pig\'s head for Christmas dinner and gathering coal from the roadside to light a fire, Frank endures poverty, near-starvation and the casual cruelty of relatives and neighbors--yet lives to tell his tale with eloquence, exuberance and remarkable forgiveness.\n\nAngela\'s Ashes, imbued on every page with Frank McCourt\'s astounding humor and compassion, is a glorious book that bears all the marks of a classic.',
  img_url: 'https://images.gr-assets.com/books/1348317139l/252577.jpg'
)

Book.create(
  title: 'The Running Man',
  author: 'Richard Bachman (Pseudonym), Stephen King',
  description: 'The Running Man is set within a dystopian future in which the poor are seen more by the government as worrisome rodents than actual human beings. The protagonist of The Running Man, Ben Richards, is quick to realize this as he watches his daughter, Cathy, grow more sick by the day and tread closer and closer to death. Desperate for money to pay Cathy’s medical bills, Ben enlists himself in a true reality style game show where the objective is to merely stay alive.',
  img_url: 'https://images.gr-assets.com/books/1333160557l/11607.jpg'
)

Book.create(
  title: 'A Game of Thrones',
  author: 'George R.R. Martin',
  description: 'Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords. As a whole, this series comprises a genuine masterpiece of modern fantasy, bringing together the best the genre has to offer. Magic, mystery, intrigue, romance, and adventure fill these pages and transport us to a world unlike any we have ever experienced. Already hailed as a classic, George R. R. Martin’s stunning series is destined to stand as one of the great achievements of imaginative fiction.\n\nA GAME OF THRONES\n\nLong ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.\n\nHere an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; and a determined woman undertakes the most treacherous of journeys. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones.\n\nsource: georgerrmartin.com',
  img_url: 'https://images.gr-assets.com/books/1436732693l/13496.jpg'
)

Book.create(
  title: 'The Wisdom of Insecurity: A Message for an Age of Anxiety',
  author: 'Alan W. Watts',
  description: 'In this fascinating book, Alan Watts explores man\'s quest for psychological security, examining our efforts to find spiritual and intellectual certainty in the realms of religion and philosophy. The Wisdom of Insecurity underlines the importance of our search for stability in an age where human life seems particularly vulnerable and uncertain. Watts argues our insecurity is the consequence of trying to be secure and that, ironically, salvation and sanity lie in the recognition that we have no way of saving ourselves.',
  img_url: 'https://images.gr-assets.com/books/1411152436l/551520.jpg'
)

Book.create(
  title: 'Fahrenheit 451',
  author: 'Ray Bradbury',
  description: 'Guy Montag is a fireman. In his world, where television rules and literature is on the brink of extinction, firemen start fires rather than put them out. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden.\n\nMontag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television \'family\'. But then he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people did not live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television.\n\nWhen Mildred attempts suicide and Clarisse suddenly disappears, Montag begins to question everything he has ever known.',
  img_url: 'https://images.gr-assets.com/books/1469704347l/17470674.jpg'
)

Book.create(
  title: 'Deliverance',
  author: 'James Dickey',
  description: 'The setting is the Georgia wilderness, where the state\'s most remote white-water river awaits. In the thundering froth of that river, in its echoing stone canyons, four men on a canoe trip discover a freedom and exhilaration beyond compare. And then, in a moment of horror, the adventure turns into a struggle for survival as one man becomes a human hunter who is offered his own harrowing deliverance.',
  img_url: 'https://images.gr-assets.com/books/1334998332l/592657.jpg'
)

Book.create(
  title: 'Post Office',
  author: 'Charles Bukowski',
  description: "\"It began as a mistake.\" By middle age, Henry Chinaski has lost more than twelve years of his life to the U.S. Postal Service. In a world where his three true, bitter pleasures are women, booze, and racetrack betting, he somehow drags his hangover out of bed every dawn to lug waterlogged mailbags up mud-soaked mountains, outsmart vicious guard dogs, and pray to survive the day-to-day trials of sadistic bosses and certifiable coworkers.\n\n This classic 1971 novel--the one that catapulted its author to national fame--is the perfect introduction to the grimly hysterical world of legendary writer, poet, and Dirty Old Man Charles Bukowski and his fictional alter ego, Chinaski.",
  img_url: 'https://images.gr-assets.com/books/1424999238l/51504.jpg'
 )

Book.create(
  title: 'Communist Manifesto',
  author: 'Karl Marx',
  description: "A rousing call to arms whose influence is still felt today, Karl Marx and Friedrich Engels\' The Communist Manifesto is edited with an introduction by Gareth Stedman-Jones in Penguin Classics.\n\nMarx and Engels\'s revolutionary summons to the working classes, The Communist Manifesto is one of the most important political theories ever formulated. After four years of collaboration, they produced an incisive account of their idea of Communism, in which they envisage a society without classes, private property or a state, arguing that the exploitation of industrial workers will eventually lead to a revolution in which Capitalism is overthrown. This vision provided the theoretical basis of political systems in Russia, China, Cuba and Eastern Europe, affecting the lives of millions. The Communist Manifesto still remains a landmark text: a work that continues to influence and provoke debate on capitalism and class.\n\nGareth Stedman Jones\'s extensive and scholarly introduction provides an unique assessment of the place of The Communist Manifesto in history, and its continuing relevance as a depiction of global capitalism. This edition reproduces Samuel Moore\'s translation of 1888 and contains a guide to further reading, notes and an index.\n\nKarl Marx (1818-1883) was born in Trier, Germany and studied law at Bonn and Berlin. He settled in London, where he studied economics and wrote the first volume of his major work, Das Kapital (1867, with two further volumes in 1884 and 1894). He is buried in Highgate Cemetery, London.\n\nFriedrich Engels (1820-1895), as well as his collaboration with Marx, was the author of The Condition of the Working Class in England (1845), based on personal observations and research.\n\nIf you enjoyed The Communist Manifesto, you might like Marx\'s Capital, also available in Penguin Classics.\n\n\'The words of the Communist Manifesto flare like the fiery writing on the wall above the crumbling bastions of capitalist society: socialism or barbarism!\'\n\nRosa Luxemburg",
  img_url: 'https://images.gr-assets.com/books/1420003664l/30474.jpg'
 )

21.times do |i|
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
