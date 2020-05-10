import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from './constants';

let nextTodoId = 0

export const addTodo = (text: string) => ({
  type: typeof ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter: string) => ({
  type: typeof SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = (id: number) => ({
  type: typeof TOGGLE_TODO,
  id
})

export const VisibilityFilters = {
  SHOW_ALL: SHOW_ALL,
  SHOW_COMPLETED: SHOW_COMPLETED,
  SHOW_ACTIVE: SHOW_ACTIVE
}
