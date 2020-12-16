import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'
import { environment } from "../../environments/environment";
import { repositoryState } from "./features/repos/repo";
import { repoQueries } from './features/repos/selectors';
import { getAllRepos } from "./features/repos/actions";

const middleware = [thunk];

if (!environment.production) {
  middleware.push(createLogger());
}

export const getReposQuries = state => repoQueries(state.repos);

export const store = createStore(
  combineReducers({
    repos: repositoryState,
  }),
  applyMiddleware(...middleware)
)

store.dispatch(getAllRepos() as any);
