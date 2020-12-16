import React from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { RepoList } from './components/repo-list';
import { getReposQuries } from '../../state/store';
import { getAllRepos } from '../../state/features/repos/actions';
import { LoadingEnums } from '../../state/common/enums';
import { Repo } from './components/repo';
import { Repository } from '../../state/features/repos/repo';

export function ReposRender({ reposState }) {
  const navigate = useNavigate();
  const state = reposState?.loadingState()
  if (state !== LoadingEnums.loaded) {

    return (
      <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style={{
          top: '50%'
        }}>
          <i className="fas fa-circle-notch fa-spin fa-5x"></i>
        </span>
      </div>
    )
  }
  return (
    <div className="bg-white lg:min-w-0 lg:flex-1">
      <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className="flex items-center">
          <h1 className="flex-1 text-lg font-medium">Projects</h1>
          <div className="relative">
            <button
              id="sort-menu"
              onClick={() => navigate('/connect')}
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Connect Repository
            </button>
          </div>
        </div>
      </div>
      <RepoList>
        {
          reposState.getAllRepos()?.map((repo: Repository, index) => {
            return (
              <Repo key={index} name={repo.name} state={repo.state} repositoryName={repo?.git?.id} labels={[
                "5 Issues found",
                "Running 35 minutes",
                "Trigger by Tom Cook"
              ]} ></Repo>
            )
          })
        }
      </RepoList>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    reposState: getReposQuries(state)
  };
}


export const Repos = connect(
  mapStateToProps,
  { getAllRepos }
)(ReposRender)

