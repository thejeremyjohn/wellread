import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import * as SessionAPIUtil from './util/session_api_util';
import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  // window.signup = SessionAPIUtil.signup;
  // window.login = SessionAPIUtil.login;
  // window.logout = SessionAPIUtil.logout;

  window.actions = actions;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={ store }/>, root);
});
