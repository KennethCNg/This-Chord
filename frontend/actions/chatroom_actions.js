import * as ChatroomAPIUtil from '../util/chatroom_api_util';
import { receiveErrors } from './ui_actions';

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
