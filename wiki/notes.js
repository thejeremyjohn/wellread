TODO
- "sticky" header
- ui renderModal === false

- addTo bookshelf button dropdown should be shown on book show and book index
  - use a modal (if possible) which can live inside the book#show slice of state
    - ui includes modals like dropdown menues

- when a user is created, three bookshelves should also be created for them
  - session_form componentWillReceiveProps-- see comment
  - these bookshelves should not be delete-able
- bookshelf_membership_controller probably needs to be restricted to current_user
- mybooks sub header (todo) should be visisble on bookindex

- bookshelves can be added on the bookshelves#index
  - all of users books should appear at exactly /users/:id/bookshelves
  - maybe bookshelves mspd on bookshelf#show w/ a conditional somewhere to
    iterate over them and render them all

UUUGGGHHHH DELETING BOOKSHELF MEMBERSHIPS
-the immediate issue is how to get the bookshelf memberships of the
users bookshelves as shown on the book#show page.
-we can get bookshelf_memberships of the user (by association)
-we need the bookshelf memberships id in order to delete it,
unless i change that logic, but I dont think thats possible.
-maybe we could change the controller destroy action to find_by bookshelf_id and book_id
on second thought, that doesnt work b/c
---------SELECTORS !?!?!?!?!

so i can do an active record query like this:
Bookshelf.joins(:bookshelf_memberships).where("book_id = ?", 300)

i want all the bookshelves belonging to a user and all of bookshelfMemberships of those bookshelves

// this is not returning book_ids
Bookshelf.find_by_sql(<<-SQL)
  SELECT
    bookshelves.*, bookshelf_memberships.book_id
  FROM
    bookshelves
    JOIN bookshelf_memberships
    ON bookshelves.id = bookshelf_memberships.bookshelf_id
SQL


DELETING BOOKSHELVES
somehow a key of undefined is ending up in my bookshelves state. It contains all the bookshelves from earlier



QUESIONS



NEW COMOPONENT CHECKLIST
  model
  table
  controller
  view
  api_util
  actions
  reducers
    whatever
    errors
  component


# rename tabs in terminal!!!!
PROMPT_COMMAND='echo -ne "\033]0;webpack\a"'
webpack --watch
PROMPT_COMMAND='echo -ne "\033]0;server\a"'
be rails s
PROMPT_COMMAND='echo -ne "\033]0;console\a"'
be rails c
PROMPT_COMMAND='echo -ne "\033]0;routes\a"'
be rails routes


// // signup
$.ajax({
  method: 'POST',
  url: 'api/users',
  data: {user: {username: 'user2', password: 'password'}}
});

// // signin
$.ajax({
  method: 'POST',
  url: '/api/session',
  data: {user: {username: 'user2', password: 'password'}}
});

// // logout
$.ajax({
  method: 'DELETE',
  url: '/api/session',
});

import {
  HashRouter, withRouter, Link, Route, Switch
} from 'react-router-dom';

import {
  combineReducers, createStore, applyMiddleware
} from 'redux';

import { Provider, connect } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

bugs encountered:
  persistent errors
    - in session form fixed by conditional in componentWillReceiveProps
      which checked if errors where present and if the path had changed
      before dispatching a clearErrors action
    - in book#show fixed by dispatching clearErrors straight away in
      the thnk action creator receiveBook
