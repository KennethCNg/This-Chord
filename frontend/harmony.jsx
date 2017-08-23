import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
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


const store = configureStore();
// window.dispatch = store.dispatch;
// window.getState = store.getState;
// window.signup = signup;
// window.login = login;
// window.logout = logout;
