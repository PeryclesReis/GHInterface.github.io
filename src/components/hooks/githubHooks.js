import { useContext } from 'react';
import githubContext from '../../provider/GithubContext';

const useGitHub = () => {
  const { githubState, getUser } = useContext(githubContext);

  return { githubState, getUser };
}

export default useGitHub;

