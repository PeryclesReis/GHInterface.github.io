import { useContext } from 'react';
import githubContext from '../../provider/GithubContext';

const useGitHub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred } = useContext(githubContext);

  return { githubState, getUser, getUserRepos, getUserStarred };
}

export default useGitHub;

