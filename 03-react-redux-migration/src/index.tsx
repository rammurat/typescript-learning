import * as React from "react";
import * as ReactDOM from "react-dom";

import App from './app'
import configureStore from './configureStore'

const initialState: any = {};
const store = configureStore(initialState);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)
