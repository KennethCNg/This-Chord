import { RECEIVE_CHATROOMS } from '../actions/chatroom_actions';
import { CLEAR_STATE } from '../actions/session_actions';
import merge from 'lodash/merge';


const directMessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHATROOMS:
      return merge({}, action.name.directMessages.directMessages);
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default directMessagesReducer;
