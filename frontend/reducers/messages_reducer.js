import { RECEIVE_MESSAGES, DELETE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return  merge({}, action.messages);
    default:
      return state;
  }
};

export default messageReducer;
