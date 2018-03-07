import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import * as SessionAPIUtil from './util/session_api_util';
import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.signup = SessionAPIUtil.signup;
  // window.signin = SessionAPIUtil.signin;
  // window.logout = SessionAPIUtil.logout;

  // window.actions = actions;
  // window.store = store;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={ store }/>, root);
});
