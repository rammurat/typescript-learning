import {FiltersActionTypes } from "./types";

export const filters = (state = [], action) => {
    switch (action.type) {
      case FiltersActionTypes.SHOW_ALL: {
        return { ...state, loading: true };
      }
      default:
        return state
    }
  }
  
  