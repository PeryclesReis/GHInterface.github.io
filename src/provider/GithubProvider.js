import React, { useCallback, useState } from 'react';
import apiGithub from '../services/Api';
import GithubContext from './GithubContext';

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    loading: false,
    user: {
      login: '',
      name: '',
      html_url: '',
      blog: '',
      company: '',
      location: '',
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = async (username) => {
    if (username) {
      const { data: user } = await apiGithub.get(`users/${ username }`);
        setGithubState((prevState) => ({
          ...prevState,
          user: {
            login: user.login,
            name: user.name,
            html_url: user.html_url,
            blog: user.blog,
            company: user.company,
            location: user.location,
            followers: user.followers,
            following: user.following,
            public_gists: user.public_gists,
            public_repos: user.public_repos,
          },
        }));
        return;
    }

    const { data: user } = await apiGithub.get(`users/Peryclesreis`);
      setGithubState((prevState) => ({
        ...prevState,
        user: {
          login: user.login,
          name: user.name,
          html_url: user.html_url,
          blog: user.blog,
          company: user.company,
          location: user.location,
          followers: user.followers,
          following: user.following,
          public_gists: user.public_gists,
          public_repos: user.public_repos,
        },
      }));
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
  }

  return (
    <GithubContext.Provider value={ contextValue }>
      { children }
    </GithubContext.Provider>
  );
}

export default GithubProvider;
