import * as UsersAPIUtil from '../util/user_api_util';
import { receiveErrors } from './ui_actions';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const requestAllUsers = () => dispatch => {
  return (
    UsersAPIUtil.fetchAllUsers()
    .then((fetchedUsers) => dispatch(receiveUsers(fetchedUsers)),
  (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};


export const editUser = user => dispatch => {
  return (
    UsersAPIUtil.editUser(user)
  );
};
