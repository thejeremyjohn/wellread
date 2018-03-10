auth error should clear when switching between signin/up
book errors and errors_reducer
make formType dry-er and clean up .signin-option css
jquery add/remove class based on path or component rendered
  left/right content divs should be visible once logged in
  mybooks sub header (todo) should be visisble on bookindex

bookshelf table
joins table bookshelf membership
take out book_id from review state
ui includes modals like dropdown menues
session: current_user {id}

checklist:
  model
  controller
  view
  api_util
  actions
  reducers
    whatever
    errors
  component

  // {books.map(book => <BookIndexItem key={book.id} book={book} />)}



# rename tabs !!!!
PROMPT_COMMAND='echo -ne "\033]0;webpack\a"'
PROMPT_COMMAND='echo -ne "\033]0;server\a"'
PROMPT_COMMAND='echo -ne "\033]0;console\a"'
PROMPT_COMMAND='echo -ne "\033]0;routes\a"'


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
