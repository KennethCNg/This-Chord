import * as MessageAPIUtil from '../util/message_api_util';
import { requestChatroomMessages } from '../actions/chatroom_actions';
import { receiveErrors } from './ui_actions';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  };
};

export const requestDeleteMessage = messageid => dispatch => {
  return (
    MessageAPIUtil.destroyMessage(messageid)
      .then((deletedMessage) => dispatch(requestChatroomMessages(deletedMessage.chatroom_id)),
      (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};


export const requestCreateMessage = (message) => dispatch => {
    return (
      MessageAPIUtil.createMessage(message)
        .then((createdMessages) => dispatch(requestChatroomMessages(createdMessages.chatroom_id)),
      (err) => dispatch(receiveErrors(err.responseJSON)))
    );
};
