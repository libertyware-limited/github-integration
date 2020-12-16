import { getAllRepos } from './actions';
import { RepoStoreState } from './repo';

export const repoQueries = (state: RepoStoreState) => {
  return {
    getRepoById: (id: number | string) => state.repos.find(repo => repo.id === id),
    loadingState: () => state.loadingState,
    getAllRepos: () => state.repos
  }
}

