import * as ChatroomAPIUtil from '../util/chatroom_api_util';
import { receiveErrors } from './ui_actions';
import { receiveMessages } from './message_actions';

export const RECEIVE_CHATROOMS = "RECEIVE_CHATROOMS";

export const receiveChatrooms = chatrooms => {
  return {
    type: RECEIVE_CHATROOMS,
    chatrooms,
  };
};

export const requestAllChatrooms = () => dispatch => {
  return (
    ChatroomAPIUtil.fetchAllChatrooms()
    .then(fetchedChatrooms => dispatch(receiveChatrooms(fetchedChatrooms)),
  (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const requestChatroomMessages = (chatroomId) => dispatch => {
  return (
    ChatroomAPIUtil.fetchChatroomMessages(chatroomId)
    .then(
      (messages) => {
        return(
          dispatch(receiveMessages(messages))
        );
      },
  (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};

// export const requestChatroomMessages = (chatroomId) => dispatch => {
//   return (
//     ChatroomAPIUtil.fetchChatroomMessages(chatroomId)
//     .then(({messages}) => dispatch(receiveMessages(messages)),
//   (err) => dispatch(receiveErrors(err.responseJSON)))
//   );
// };

export const requestCreateChatroom = chatroom => dispatch => {
  return (
    ChatroomAPIUtil.createChatroom(chatroom)
    .then(() => dispatch(requestAllChatrooms()),
  (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const requestDestroyChatroom = chatroomId => dispatch => {
  return (
    ChatroomAPIUtil.destroyChatroom(chatroomId)
    .then(() => dispatch(requestAllChatrooms()),
  (err) => dispatch(receiveErrors(err.responseJSON)))
  );
};
