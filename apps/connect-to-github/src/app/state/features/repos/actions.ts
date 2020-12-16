import { repoService } from "./repo.service"
import { LoadingEnums } from '../../common/enums';
import { Repository } from "./repo";

export const FETCH_REPOS = 'FETCH_REPOS';
export const ADD_REPO = 'ADD_REPO';
export const REMOVE_REPO = 'REMOVE_REPO';

export const addRepos = (repos: Repository[]) => ({
  type: ADD_REPO,
  payload: repos
})
const fetchingRepo = () => ({
  type: FETCH_REPOS,
  payload: LoadingEnums.loading,
})
export const removeRepos = (ids: (string|number)[]) => ({
  type: ADD_REPO,
  payload: ids
})



export const getAllRepos = () => dispatch => {
  dispatch(fetchingRepo())
  repoService.fetchRepos().then((repos: Repository[]) => {
    dispatch(addRepos(repos))
  })
}
