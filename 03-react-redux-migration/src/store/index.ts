import { Store, createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {todos} from './todo/reducer'
import {filters} from './filters/reducer'

import {TodoState} from './todo/types'
import {FilterState} from './filters/types'

export const rootReducer = () => combineReducers({
  todos: todos,
  filters: filters
})

export interface initialState {
  todos: {
    id: number,
    text: string,
    completed: boolean
  }[],
  filters: string
}

export interface AppState {
  todos: TodoState;
  filters: FilterState;
}

export default function configureStore(
  initialState: AppState
  ): Store<AppState> {
    const store = createStore(
      rootReducer(),
      initialState,
      composeWithDevTools(
        applyMiddleware(thunk),
      )
    );
    return store;
}