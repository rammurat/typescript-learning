import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { AppState, createRootReducer } from "./store";

export default function configureStore(
  initialState: AppState
): Store<AppState> {
  const store = createStore(
    createRootReducer(),
    initialState,
    composeWithDevTools(
    applyMiddleware(thunk))
  );
  return store;
}