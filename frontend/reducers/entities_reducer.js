import { combineReducers } from 'redux';
import messageReducer from './messages_reducer';

export default combineReducers({
  messages: messageReducer,
});
