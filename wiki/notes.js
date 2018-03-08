books#index
book errors and errors_reducer

pull book id from location w/in msp?

bookshelf table
joins table bookshelf membership
take out book_id from review state
ui includes modals like dropdown menues
session: current_user {id}

checklist:
  model
  controller
  api_util
  actions
  reducers
    whatever
    errors


# rename tabs !!!!
PROMPT_COMMAND='echo -ne "\033]0;routes\a"'
PROMPT_COMMAND='echo -ne "\033]0;console\a"'
PROMPT_COMMAND='echo -ne "\033]0;server\a"'
PROMPT_COMMAND='echo -ne "\033]0;webpack\a"'


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
