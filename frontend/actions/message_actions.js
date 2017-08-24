import * as MessageAPIUtil from '../util/message_api_util';
import { receiveErrors } from './ui_actions';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const deleteMessage = message => {
  return {
    type: DELETE_MESSAGE,
    message
  };
};

export const requestDeleteMessage = message => dispatch => {
  return (
    MessageAPIUtil.destroyMessage()
      .then(() => dispatch(deleteMessage(null)),
    (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};
