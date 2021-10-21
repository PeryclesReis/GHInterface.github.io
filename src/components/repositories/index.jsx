import React from 'react';
import * as S from '../../styles/RepositoriesCss';
import RepositoryItem from '../repository item';

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPainel>
        <RepositoryItem name='101-linux-commands-ebook' linkToRepo='https://github.com/PeryclesReis/101-linux-commands-ebook' fullName='PeryclesReis/101-linux-commands-ebook' />
      </S.WrapperTabPainel>
      <S.WrapperTabPainel>
        <RepositoryItem name='PeryclesReis' linkToRepo='https://github.com/PeryclesReis/PeryclesReis' fullName='PeryclesReis/PeryclesReis' />
      </S.WrapperTabPainel>
      <S.WrapperTabPainel>panel Starred</S.WrapperTabPainel>
    </S.WrapperTabs>
  );
}

export default Repositories;
