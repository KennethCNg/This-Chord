// NEED TO IMPLEMENT MODALS
import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/ui_actions';

const initialState = {
  errors: [],
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge({}, { errors: action.errors });
    case CLEAR_ERRORS:
      return { errors: [] };
    default:
      return state;
  }
};

export default uiReducer;
