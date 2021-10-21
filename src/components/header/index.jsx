import React, { useEffect, useState } from 'react';
import useGitHubHooks from '../hooks/githubHooks';
import * as S from '../../styles/HeaderCss';

const Header = () => {
  const { getUser } = useGitHubHooks();
  const [usernameForSearch, setUsernameForSearch] = useState('');

  const handleChange = ({ target: { value } }) => {
    setUsernameForSearch({
      usernameForSearch: value,
    });
  }

  const handleClick = () => {
    getUser(usernameForSearch.usernameForSearch);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <S.Wrapper>
      <input
        type="text"
        name="username"
        value={ usernameForSearch.usernameForSearch }
        onChange={ (e) => handleChange(e) }
        placeholder="Digite o username para pesquisa..."
      />
      <button type="submit" onClick={ handleClick }>Buscar</button>
    </S.Wrapper>
  );
};

export default Header;
