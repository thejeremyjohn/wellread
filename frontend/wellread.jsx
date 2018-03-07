import React from 'react';
import ReactDOM from 'react-dom';

import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  // window.SessionAPIUtil = SessionAPIUtil;
  window.signup = SessionAPIUtil.signup;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>welcome to wellread</h1>, root);
  // debugger
});
