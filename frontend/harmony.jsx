import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import merge from 'lodash/merge';
// import { receiveMessages, requestAllMessages, requestDeleteMessage, RECEIVE_MESSAGE } from './actions/message_actions';
// import { fetchAllMessages  } from './util/message_api_util';
// import { signup, login, logout } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.querySelector("#root");
  ReactDOM.render(<Root store={ store }/>, root);
});
// window.store = configureStore();
// window.dispatch = store.dispatch;
// window.getState = store.getState;
// window.fetchAllMessages = fetchAllMessages;
// window.receiveMessages = receiveMessages;
// window.requestAllMessages = requestAllMessages;
// window.requestDeleteMessage = requestDeleteMessage;
// window.dispatch = store.dispatch;
// window.getState = store.getState;
// window.signup = signup;
// window.login = login;
// window.logout = logout;
