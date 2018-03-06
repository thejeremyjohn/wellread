import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
// import Root from './components/root';

import * as SessionAPIUtil from './util/session_api_util';

window.signup = SessionAPIUtil.signup;
window.login = SessionAPIUtil.login;
window.logout = SessionAPIUtil.logout;
