import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from 'routes/Home';
import { Search } from 'routes/Collections';

export const Router = () => {
  return (
    <Switch>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
