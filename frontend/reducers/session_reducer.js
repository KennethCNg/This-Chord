// import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ERRORS } from '../actions/ui_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  };

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, action.currentUser);
    default:
      return state;
  }
};

export default sessionReducer;
