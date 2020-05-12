import {combineReducers} from 'redux'
import {TodosReducer} from './todos/reducer'
import {TodoState} from './todos/types'

export interface AppState {
  todos: TodoState
}

export const createRootReducer = () =>
  combineReducers({
    todos: TodosReducer
});