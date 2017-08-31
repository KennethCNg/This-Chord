import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import merge from 'lodash/merge';
import { isEmptyObject }  from './helpers/helpers';
import values from 'lodash/values';
// import { receiveChatrooms, requestAllChatrooms, RECEIVE_CHATROOMS } from './actions/chatroom_actions';
// import { fetchAllChatrooms } from './util/chatroom_api_util';
// import { receiveMessages, requestAllMessages, requestDeleteMessage, RECEIVE_MESSAGE } from './actions/message_actions';
// import { fetchAllMessages  } from './util/message_api_util';
// import { signup, login, logout } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    window.store = configureStore();
    // window.dispatch = store.dispatch;
    // window.getState = store.getState;
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.querySelector("#root");
  ReactDOM.render(<Root store={ store }/>, root);
});

window.values = values;
window.isEmptyObject = isEmptyObject;
// window.fetchAllChatrooms = fetchAllChatrooms;
// window.receiveChatrooms = receiveChatrooms;
// window.requestAllChatrooms = requestAllChatrooms;
// window.fetchAllMessages = fetchAllMessages;
// window.receiveMessages = receiveMessages;
// window.requestAllMessages = requestAllMessages;
// window.requestDeleteMessage = requestDeleteMessage;
// window.dispatch = store.dispatch;
// window.getState = store.getState;
// window.signup = signup;
// window.login = login;
// window.logout = logout;
