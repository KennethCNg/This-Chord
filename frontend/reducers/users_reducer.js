import merge from 'lodash/merge';
import { RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CHATROOMS } from '../actions/chatroom_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USERS:
      return merge({}, action.users );
    case RECEIVE_CHATROOMS:
    debugger;
      return merge({}, action.name.directMessages.members);
    default:
      return state;
  }
};

export default usersReducer;
