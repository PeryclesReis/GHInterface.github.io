import { createContext } from 'react';

const githubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

export default githubContext;