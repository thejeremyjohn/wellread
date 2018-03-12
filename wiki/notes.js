TODO
- add to bookshelf button dropdown should be shown on book show and book index
- bookshelf_membership_controller probably needs to be restricted to current_user
- seed stuff on heroku
- jquery add/remove class based on path or component rendered
- left/right content divs should be visible once logged in
- mybooks sub header (todo) should be visisble on bookindex

QUESIONS
- bookshelfMembershipsReducer currently unneccesary as I dont care about receiving json?
- where is the user_id on bookshelves / exist in console but not in browser?
- why ajax is currently circumeventing controller-
  ...level validations re updating another users shelf?



take out book_id from review state
ui includes modals like dropdown menues
session: current_user {id}

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

bugs encountered:
  persistent errors
    - in session form fixed by conditional in componentWillReceiveProps
      which checked if errors where present and if the path had changed
      before dispatching a clearErrors action
    - in book#show fixed by dispatching clearErrors straight away in
      the thnk action creator receiveBook
