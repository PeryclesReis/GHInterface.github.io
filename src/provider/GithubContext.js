import { createContext } from 'react';

const githubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

export default githubContext;