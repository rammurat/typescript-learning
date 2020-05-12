import { Reducer } from "redux";

import {ToDoActionTypes, TodoState } from "./types";

export const initialState: TodoState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<TodoState> = (state = initialState, action) => {
    switch (action.type) {
      case ToDoActionTypes.FETCH_REQUEST: {
        return { ...state, loading: true };
      }
      case ToDoActionTypes.FETCH_SUCCESS: {
        return { ...state, loading: false, data: action.payload };
      }
      case ToDoActionTypes.FETCH_ERROR: {
        return { ...state, loading: false, errors: action.payload };
      }
      case ToDoActionTypes.ADD_TODO: {
        return {
          errors: state.errors,
          loading: state.loading,
          data: [
            ...state.data,
            action.payload
          ]
        };
      }
      default:
        return state
    }
  }

  export { reducer as TodosReducer };
