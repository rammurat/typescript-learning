import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import {AppState} from '../index'
import {ToDoActionTypes } from "./types";
import todos from "../../data/todos";

export type AppThunk = ActionCreator<
  ThunkAction<void, AppState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: ToDoActionTypes.FETCH_SUCCESS,
        payload: todos
      });
    } catch (e) {
      return dispatch({
        type: ToDoActionTypes.FETCH_ERROR
      });
    }
  };
};