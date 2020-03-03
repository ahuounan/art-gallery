import React from 'react';
import {} from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'routes/Home';
import { About } from 'routes/About';
import { Collection } from 'routes/Collection';
import { Collections } from 'routes/Collections';
import { Contact } from 'routes/Contact';
import { Years } from 'routes/Years';
import { Year } from 'routes/Year';
import { useFetchPaintings } from 'store/paintings/hooks';

export const Router = () => {
  useFetchPaintings();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/collection/:id">
          <Collection />
        </Route>
        <Route path="/collections">
          <Collections />
        </Route>
        <Route path="/years">
          <Years />
        </Route>
        <Route path="/year/:year">
          <Year />
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
