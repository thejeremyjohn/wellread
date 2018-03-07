import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signup(user).then(resUser => {
      return dispatch(receiveCurrentUser(resUser));
    });
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.login(user).then(resUser => {
      return dispatch(receiveCurrentUser(resUser));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logout().then(user => {
      return dispatch(receiveCurrentUser(null));
    });
  };
};
