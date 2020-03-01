import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom';

import { Store } from 'store/Store';

import { App } from './App';

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>,
  document.getElementById('root')
);
