import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './ui_actions';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";



export const receiveCurrentUser = currentUser =>  {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const signup = user => dispatch => {
  return (
    SessionAPIUtil.signup(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
            (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const login = user => dispatch => {
  return (
    SessionAPIUtil.login(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
            (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const logout = () => dispatch => {
  return (
    SessionAPIUtil.logout()
      .then(() => dispatch(clearErrors()))
      .then(() => dispatch(receiveCurrentUser(null)),
            (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};
