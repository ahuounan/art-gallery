import React from 'react';
import {} from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'routes/Home';
import { About } from 'routes/About';
import { Collection } from 'routes/Collection';
import { Collections } from 'routes/Collections';
import { Contact } from 'routes/Contact';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/collections">
          <Collections />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
