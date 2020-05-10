import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {MyStore} from '../types/index'

export default combineReducers<MyStore>({
  todos,
  visibilityFilter
})