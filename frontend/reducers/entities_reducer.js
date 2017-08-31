import { combineReducers } from 'redux';
import messageReducer from './messages_reducer';
import chatroomReducer from './chatrooms_reducer';
import usersReducer from './users_reducer';
import directMessagesReducer from './direct_messages_reducer';

export default combineReducers({
  messages: messageReducer,
  chatrooms: chatroomReducer,
  directMessages: directMessagesReducer,
  users: usersReducer,
});
