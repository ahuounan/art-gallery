import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'components/Router';
import { DependencyManager } from 'services/DependencyManager';
import { PaintingsApi } from 'store/paintings/api';
import { Provider } from 'react-redux';
import { store } from 'store/config';

export class App {
  constructor() {
    DependencyManager.initialize();
    PaintingsApi.get();
  }

  run() {
    ReactDOM.render(
      <Provider store={store}>
        <Router />
      </Provider>,
      document.getElementById('root')
    );
  }
}
