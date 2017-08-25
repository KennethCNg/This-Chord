import React from 'react';
import HomeContainer from './home_container';
import SessionFormContainer from './session_form_container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
      <div>
        <header>
        </header>
          <Switch>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
            <ProtectedRoute path="/" component={HomeContainer} />
          </Switch>
      </div>
);
};

export default App;
