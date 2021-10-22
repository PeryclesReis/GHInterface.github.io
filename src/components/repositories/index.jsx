import React, { useEffect, useState } from 'react';
import * as S from '../../styles/RepositoriesCss';
import RepositoryItem from '../repository item';
import useGitHubHooks from '../hooks/githubHooks';

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGitHubHooks();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if(githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }

    setHasUserForSearchRepos(githubState.repositories);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {
        hasUserForSearchRepos
        ? (
          <S.WrapperTabs
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPainel>
            <S.WrapperList>
              { githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              )) }
            </S.WrapperList>
          </S.WrapperTabPainel>
          <S.WrapperTabPainel>
            <S.WrapperList>
              { githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              )) }
            </S.WrapperList>
          </S.WrapperTabPainel>
          <S.WrapperTabPainel>panel Starred</S.WrapperTabPainel>
        </S.WrapperTabs>
        )
        : (<></>)
      }

    </>
  );
}

export default Repositories;
