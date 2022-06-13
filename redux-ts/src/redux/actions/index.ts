import { ActionTypes } from "../action-types";

interface SearchPackagesAction {
  type: ActionTypes.SEARCH_PACKAGES;
}

interface SearchPackagesSuccessAction {
  type: ActionTypes.SEARCH_PACKAGES_SUCCESS;
  payload: string[];
}

interface SearchPackagesErrorAction {
  type: ActionTypes.SEARCH_PACKAGES_ERROR;
  payload: string;
}

export type Action =
  | SearchPackagesAction
  | SearchPackagesSuccessAction
  | SearchPackagesErrorAction;
