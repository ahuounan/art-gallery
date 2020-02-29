import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from 'routes/Home';
import { Search } from 'routes/Search';

export const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}