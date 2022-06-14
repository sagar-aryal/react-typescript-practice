import { Action } from "../actions";
import { ActionTypes } from "../action-types";

export interface State {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const packagesReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionTypes.SEARCH_PACKAGES:
      return {
        loading: true,
        error: null,
        data: [],
      };

    case ActionTypes.SEARCH_PACKAGES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case ActionTypes.SEARCH_PACKAGES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

export default packagesReducer;
