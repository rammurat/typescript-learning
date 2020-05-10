import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import App from './containers/app'
import {initialState} from './store'
import configureStore from './store'

const initialState: any = {};
const store = configureStore(initialState);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
)
