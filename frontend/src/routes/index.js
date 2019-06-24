import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

import Private from './private';

import Main from '../pages/Main';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Private path="/" exact component={Main} />
    </Switch>
  </ConnectedRouter>
);
export default Routes;
