import React, { useState } from 'react'
import { getReposQuries } from '../../state/store';
import { GithubAccounts } from './components/github-account'
import { GithubRepoList } from './components/select-repo'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRepos } from '../../state/features/repos/actions';
import { store } from '../../state/store';
import { RepoState } from '../../state/features/repos/repo';

export function ConnectAccountRender() {
  const [account, setAccount] = useState();
  const navigate = useNavigate();


  const selectRepo = (repo: { id: string }) => {
    store.dispatch(addRepos([
      {
        id: '2',
        lastReportId: null,
        name: 'My Repo for Uleska',
        state: RepoState.runningReport,
        git: {
          id: repo.id,
          url: `//github.com/${repo.id}`
        }
      }
    ]));
    navigate('/repos');
  }

  return (
    <div className="bg-white lg:min-w-0 lg:flex-1">
      <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className="flex items-center">
          <h1 className="flex-1 text-lg font-medium">Select you account</h1>
        </div>
      </div>
      {!account && <GithubAccounts onSelect={setAccount}></GithubAccounts>}
      {account && <GithubRepoList onSelect={selectRepo}></GithubRepoList>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    reposState: getReposQuries(state)
  };
}


export const ConnectAccount = connect(
  mapStateToProps,
  { addRepos }
)(ConnectAccountRender)


