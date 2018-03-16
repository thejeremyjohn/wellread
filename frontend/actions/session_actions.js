import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signup = (user) => {
  return (dispatch) => {
    // dispatch(clearErrors());
    return SessionAPIUtil.signup(user).then(
      (resUser) => dispatch(receiveCurrentUser(resUser)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const signin = (user) => {
  return (dispatch) => {
    // dispatch(clearErrors());
    return SessionAPIUtil.signin(user).then(
      (resUser) => dispatch(receiveCurrentUser(resUser)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    // dispatch(clearErrors());
    return SessionAPIUtil.logout().then(
      (resUser) => {
        dispatch(receiveCurrentUser(null));
        // dispatch(reset/clear all entities)
      },
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
