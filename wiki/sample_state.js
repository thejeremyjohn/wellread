    {
      entities: {
        books: {
          1: {
            id: 1,
            author: 'Charles Bukowski',
            title: 'Post Office',
            description: 'The first and perhaps most underappreciated novel by Charles Bukowski...'
          },
          2: {
            id: 2,
            author: 'Karl Marx',
            title: 'The Communist Manifest',
            description: 'An aptly named book by an esteemed German politico-philosopher...'
          }
        },
        users: {
          1: {
            id: 1,
            username: 'bobsyouruncle',
            email: 'yourunclebob@yahoo.com',
            img_url: 'http://weknowmemes.com/wp-content/uploads/2012/03/how-to-pose-like-this.jpg'
          }
        }
        reviews: {
          1: {
            id: 1,
            rating: 5,
            body: 'Oh my gosh, i read sooooo many books and all of them suck compared to this one because feels!!'
            user_id: 14,
            book_id: 21
          }
        }
      },
      ui: {
        // loading: true/false
      },
      errors: {
        login: ["Invalid username / password"],
        // reviewForm: ["Review body cannot be blank"],
      },
      session: {
        // currentUser: {}
      }
    }
