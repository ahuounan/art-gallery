import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "store/root";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);