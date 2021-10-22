import React, { useCallback, useState } from 'react';
import apiGithub from '../services/Api';
import GithubContext from './GithubContext';

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
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
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    if (username) {
      const { data: user } = await apiGithub.get(`users/${ username }`).finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
      const {
        avatar_url,
        login,
        name,
        html_url,
        blog,
        company,
        location,
        followers,
        following,
        public_gists,
        public_repos,
      } = user;
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            avatar_url,
            login,
            name,
            html_url,
            blog,
            company,
            location,
            followers,
            following,
            public_gists,
            public_repos,
          },
        }));
        return;
    }

    const { data: user } = await apiGithub.get(`users/Peryclesreis`).finally(() => {
      setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading,
      }));
    });
    const {
      avatar_url,
      login,
      name,
      html_url,
      blog,
      company,
      location,
      followers,
      following,
      public_gists,
      public_repos,
    } = user;
      setGithubState((prevState) => ({
        ...prevState,
        hasUser: true,
        user: {
          avatar_url,
          login,
          name,
          html_url,
          blog,
          company,
          location,
          followers,
          following,
          public_gists,
          public_repos,
        },
      }));
  }

  const getUserRepos = async (username) => {
    const { data } = await apiGithub.get(`users/${ username }/repos`);
    setGithubState((prevState) => ({
      ...prevState,
      repositories: data,
    }));
  }

  const getUserStarred = async (username) => {
    const { data } = await apiGithub.get(`users/${ username }/starred`);
    setGithubState((prevState) => ({
      ...prevState,
      starred: data,
    }));
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  }

  return (
    <GithubContext.Provider value={ contextValue }>
      { children }
    </GithubContext.Provider>
  );
}

export default GithubProvider;
