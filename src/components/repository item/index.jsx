import React from 'react';
import * as S from '../../styles/RepositoriesItem';

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <a
      href={ linkToRepo }
      target='_blank'
      rel="noreferrer"
    >
      <S.Wrapper>
        <S.WrapperTitle>
            { name }
        </S.WrapperTitle>
        <S.WrapperFullName>
          Full name:
          <span>
            { fullName }
          </span>
        </S.WrapperFullName>
      </ S.Wrapper>
    </a>
  );
}

export default RepositoryItem;
