import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { HashRouter, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
    <header>
      <h1>Harmony</h1>
    </header>

    <Route path="/" exact component={GreetingContainer} />
    <AuthRoute path="/login" exact component={SessionFormContainer} />
    <AuthRoute path="/signup" exact component={SessionFormContainer} />
  </div>
);
};

export default App;
