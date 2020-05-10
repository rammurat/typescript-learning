import * as React from "react";
import * as ReactDOM from "react-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk';

import App from './components/app'
import rootReducer from './reducers'
import {initialState} from './reducers/store-state'
import {MyStore} from './types/index'

const store = createStore<MyStore, any, any, any>(
  rootReducer,
  initialState,
  composeWithDevTools(
    // applyMiddleware(thunk),
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
