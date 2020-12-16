import { LoadingEnums } from "../../common/enums"
import { ADD_REPO, FETCH_REPOS, REMOVE_REPO } from "./actions"

export enum RepoState {
  fetching,
  runningReport,
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export interface Repository {
  id: string | number;
  name: string;
  git: {
    url: string,
    id: string
  }
  lastReportId: string | number;
  state: RepoState
}

export interface RepoStoreState {
  repos: Repository[];
  loadingState: LoadingEnums
}

const initialState: RepoStoreState = {
  repos: null,
  loadingState: null,
}


export const repositoryState = (state = initialState, action: { type: string, payload: any }): RepoStoreState  => {
  switch (action.type) {
    case FETCH_REPOS:
      return {
        ...initialState,
        loadingState: action.payload
      }
    case ADD_REPO:
      return {
        ...state,
        repos: [
          ...(state.repos || []),
          ...(Array.isArray(action.payload) ? action.payload : [action.payload]),
        ],
        loadingState: LoadingEnums.loaded
      }
    case REMOVE_REPO:
      return {
        ...state,
        repos: state.repos.filter(repo => !action.payload?.includes(repo.id))
      }
    default:
      return state
  }
}
