WHAT YOU CAN DO
- login/signup
- add a book to a shelf
- remove a book from a shelf
  - refresh required
- create a shelf
- destroy a shelf

WHAT YOU CANT DO
- reviews
- read status

TODO
- clear action for all entity reducers
- style button to open shelf-menu
- addTo bookshelf button dropdown should be shown on book show and book index
  - use a modal (if possible) which can live inside the book#show slice of state
    - ui includes modals like dropdown menues
      - ui renderModal === false

- mybooks sub header (todo) should be visisble on bookindex

- all of users books should appear at exactly /users/:id/bookshelves
  - maybe bookshelves mspd on bookshelf#show w/ a conditional somewhere to
    iterate over them and render them all

- destroying a bookshelf_membership should also destroy a review if one exists


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
