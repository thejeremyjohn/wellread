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
    return SessionAPIUtil.signup(user).then(
      (resUser) => dispatch(receiveCurrentUser(resUser)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const signin = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signin(user).then(
      (resUser) => dispatch(receiveCurrentUser(resUser)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logout().then(
      (resUser) => dispatch(receiveCurrentUser(null)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
