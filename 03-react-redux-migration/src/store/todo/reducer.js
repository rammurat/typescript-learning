import {ToDoActionTypes } from "./types";

export const todos = (state = [], action) => {
    switch (action.type) {
      case ToDoActionTypes.FETCH_REQUEST: {
        return { ...state, loading: true };
      }
      case ToDoActionTypes.FETCH_SUCCESS: {
        console.log("action payload", action.payload);
        return { ...state, loading: false, data: action.payload };
      }
      case ToDoActionTypes.FETCH_ERROR: {
        return { ...state, loading: false, errors: action.payload };
      }
      case ToDoActionTypes.ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case ToDoActionTypes.TOGGLE_TODO:
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }

  