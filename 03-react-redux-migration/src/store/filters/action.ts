import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import {AppState} from '../index'
import {FiltersActionTypes } from "./types";

export type AppThunk = ActionCreator<
  ThunkAction<void, AppState, null, Action<string>>
>;

export const fetchFilters: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
      return dispatch({
        type: FiltersActionTypes.SHOW_ALL,
        payload: false
      });
  };
};