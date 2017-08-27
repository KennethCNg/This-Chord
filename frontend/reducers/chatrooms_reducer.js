import { RECEIVE_CHATROOMS } from '../actions/chatroom_actions';
import merge from 'lodash/merge';


const chatroomReducer = (state = {}, action) => {
  debugger;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHATROOMS:
      return merge({}, action.chatrooms);
      default:
      return state;
  }
};

export default chatroomReducer;
