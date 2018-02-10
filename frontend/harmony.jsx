import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './root';
import merge from 'lodash/merge';
import { isEmpty } from 'lodash';
import values from 'lodash/values';
import { editUser } from './util/user_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    window.store = configureStore();
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.querySelector("#root");
  ReactDOM.render(<Root store={ store }/>, root);
});

window.values = values;
window.editUser = editUser;