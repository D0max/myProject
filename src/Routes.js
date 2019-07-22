import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => <h1>HomePage</h1>} />
  </Switch>
);

export default Routes;
