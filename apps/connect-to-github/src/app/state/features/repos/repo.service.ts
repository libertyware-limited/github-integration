export class RepoService {
  fetchRepos() {
    return new Promise(res => {
      res(
        [
          {
            id: '43c8cd58-1a13-564c-aec1-2bbfa2e2a58e',
            name: 'login',
            git: {
              url: '//github.com/username/project',
              id: 'username/project'
            },
            lastReportId: '7d594329-65a9-5d23-a20d-f9336025c315',
            state: null
          }
        ]
      )
    });
  }
}

export const repoService = new RepoService();
