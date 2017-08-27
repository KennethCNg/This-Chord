import { combineReducers } from 'redux';
import messageReducer from './messages_reducer';
import chatroomReducer from './chatrooms_reducer';

export default combineReducers({
  messages: messageReducer,
  chatrooms: chatroomReducer,
});
