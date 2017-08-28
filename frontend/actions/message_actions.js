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
      .then(() => dispatch(requestChatroomMessages()),
      (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};


export const requestCreateMessage = (message) => dispatch => {
    return (
      MessageAPIUtil.createMessage(message)
        .then((createdMessages) => dispatch(receiveMessages(createdMessages)),
      (err) => dispatch(receiveErrors(err.responseJSON)))
    );
};

// export const requestAllMessages = () => dispatch => {
//     return (
//       MessageAPIUtil.fetchAllMessages()
//         .then(fetchedMessages => dispatch(receiveMessages(fetchedMessages)),
//         (err) => dispatch(receiveErrors(err.responseJSON)))
//       );
// };
